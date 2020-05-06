const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slugFragment = createFilePath({ node, getNode })

    const fileParent = getNode(node.parent)
    if (fileParent.absolutePath.includes("/talks/")) {
      createNodeField({
        name: "type",
        node,
        value: "talk",
      })
    } else {
      createNodeField({
        name: "type",
        node,
        value: "post",
      })

      createNodeField({
        name: "slug",
        node,
        value: `blog${slugFragment}`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "post" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (results.error) {
    reporter.panicOnBuild("ERROR loading `createPages` query")
  }

  const posts = results.data.allMdx.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/post-layout.js"),
      context: { id: node.id },
    })
  })
}
