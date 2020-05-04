import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { graphql } from "gatsby"
import { Heading, Text, Flex, Box, Link } from "rebass"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { pathToRoute } from "../utils/path-to-route"
import OutboundLink from "../components/link"

const IndexPage = ({ data, location }) => (
  <Layout>
    <SEO title="Home" />
    <Heading mb={[3, 0]}>Nice to meet you, my name is</Heading>
    <Heading
      fontSize={[8]}
      fontWeight={900}
      mb={[5, 6]}
      lineHeight={[1, "heading"]}
    >
      Graham Barber
    </Heading>
    <Heading mt={5} mb={3}>
      About Me
    </Heading>
    <Box>
      <Text mb={3}>
        I'm a web developer, DevOps engineer, and JavaScript enthusiast
        dedicated to creating delightful experiences for customers, developers,
        and businesspeople alike.
      </Text>
      <Text mb={3}>
        My hobbies include staying up-to-date with cutting-edge web technology,
        automating workflows, and customizing mechanical keyboards. I also enjoy
        public speaking and creating mental catalogs of just about anything.
      </Text>
    </Box>
    {data.projects.nodes.length > 0 && (
      <>
        <Heading mt={[5, 6]} mb={3}>
          Projects
        </Heading>
        <Flex flexWrap="wrap" px={4} as="ul">
          {data.projects.nodes.map(({ name, url }) => (
            <Box key={name} as="li" width={[1, 1 / 2]} mb={3}>
              <OutboundLink href={url}>{name}</OutboundLink>
            </Box>
          ))}
        </Flex>
      </>
    )}
    {data.posts.edges.length > 0 && (
      <>
        <Heading mt={[5, 6]} mb={3}>
          Writing
        </Heading>
        <Box
          sx={{
            "@media screen and (min-width: 50em)": {
              "& a:first-of-type:before": {
                content: '"NEW"',
                fontSize: "1.2em",
                display: "block",
                fontWeight: 900,
                color: "primary",
                position: "absolute",
                transformOrigin: "50% 100%",
                transform: "rotate(-90deg) translate(30px, -36px)",
              },
            },
          }}
        >
          {data.posts.edges.map(({ node: post }) => (
            <Link
              key={post.id}
              as={GatsbyLink}
              to={pathToRoute(post.fileAbsolutePath, "blog")}
              mb={4}
              p={3}
              sx={{
                background: "none",
                display: "block",
                fontWeight: 400,
                borderLeftStyle: "solid",
                borderLeftWidth: "5px",
                borderLeftColor: "primary",
                borderRadius: "0 9px 9px 0",
                ":hover": {
                  transform: "translateX(1em)",
                  bg: "muted",
                },
                ":active": {
                  transform: "translateX(2em)",
                },
              }}
            >
              <Heading fontSize={3} mb={1}>
                {post.frontmatter.title}
              </Heading>
              <Flex
                justifyContent="space-between"
                flexWrap="wrap"
                mb={2}
                sx={{ fontFeatureSettings: '"tnum" on' }}
              >
                <Text color="grey">{`Published ${post.frontmatter.publishedAt}`}</Text>
                <Text color="grey">{`${post.timeToRead} minute read | ${post.wordCount.words} words`}</Text>
              </Flex>
              <Text>{post.frontmatter.description}</Text>
            </Link>
          ))}
        </Box>
      </>
    )}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    projects: allProjectsJson {
      nodes {
        name
        url
      }
    }
    posts: allMdx(sort: { fields: frontmatter___publishedAt, order: DESC }) {
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
