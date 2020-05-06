import React from "react"
import { graphql } from "gatsby"
import { Heading, Text } from "rebass"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostLink from "../components/post-link"

export default function BlogPage({ data, location }) {
  return (
    <Layout referredFrom={location?.state?.referredFrom}>
      <SEO
        title="Blog"
        description="Here's a list of every blog post I've published on the internet."
      />
      <Heading fontSize={8} fontWeight={900} mb={5} lineHeight={[1, 1.2]}>
        Graham's Blog
      </Heading>
      <Text mb={[5, 5]}>
        Here's a list of every blog post I've published on the internet.
      </Text>
      {data.posts.edges.length > 0 ? (
        data.posts.edges.map(({ node: post }) => (
          <PostLink
            key={post.id}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            publishedAt={post.frontmatter.publishedAt}
            timeToRead={post.timeToRead}
            wordCount={post.wordCount.words}
            fileAbsolutePath={post.fileAbsolutePath}
            referredFrom={{
              page: "Blog",
              path: "/blog",
            }}
          />
        ))
      ) : (
        <Text>Haha, shoot. Looks like there's nothing here.</Text>
      )}
    </Layout>
  )
}

export const postQuery = graphql`
  query {
    posts: allMdx(
      filter: { fields: { type: { eq: "post" } } }
      sort: { fields: frontmatter___publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            publishedAt(formatString: "MMMM Do, YYYY")
          }
          timeToRead
          fileAbsolutePath
          wordCount {
            words
          }
        }
      }
    }
  }
`
