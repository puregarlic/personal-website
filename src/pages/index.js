import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Flex, Box } from "rebass"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/seo"
import Link from "../components/link"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import NewsletterSignup from "../components/newsletter-signup"

const IndexPage = ({ data, location }) => (
  <Layout showLink={false}>
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
      <Text textAlign="justify" mb={3}>
        I'm a web developer, DevOps engineer, and business management student
        dedicated to creating delightful experiences for customers, developers,
        and businesspeople alike.
      </Text>
      <Text textAlign="justify" mb={3}>
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
              <Link href={url}>{name}</Link>
            </Box>
          ))}
        </Flex>
      </>
    )}
    {data.decks.edges.length > 0 && (
      <>
        <Heading mt={[5, 6]} mb={3}>
          Talks and Slide Decks
        </Heading>
        <Text mb={3} textAlign="justify">
          These are a little buggy in Dark Mode. I strongly recommend changing
          to light mode before clicking these links.
        </Text>
        <Flex flexWrap="wrap" px={4} as="ul">
          {data.decks.edges.map(({ node: { id, title, slug } }) => (
            <Box key={id} as="li" width={[1]} mb={3}>
              <Link internal to={slug}>
                {title}
              </Link>
            </Box>
          ))}
        </Flex>
      </>
    )}
    {data.posts.edges.length > 0 && (
      <>
        <Flex
          mt={[5, 6]}
          mb={3}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Heading>Writing</Heading>
          <Link
            internal
            to="/blog"
            sx={{ lineHeight: 1.2 }}
            state={{
              referredFrom: {
                page: "Home",
                path: "/",
              },
            }}
          >
            See all posts <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Flex>
        <Box
          mb={[5, 6]}
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
            <PostLink
              key={post.id}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              publishedAt={post.frontmatter.publishedAt}
              timeToRead={post.timeToRead}
              wordCount={post.wordCount.words}
              fileAbsolutePath={post.fileAbsolutePath}
              referredFrom={{
                page: "Home",
                path: "/",
              }}
            />
          ))}
        </Box>
      </>
    )}
    <Heading mb={3}>Newsletter</Heading>
    <Text mb={3} textAlign="justify">
      Sign up for my newsletter to get updates from my blog (plus some extra
      commentary) delivered straight to your inbox.
    </Text>
    <NewsletterSignup />
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
    posts: allMdx(
      filter: { fields: { type: { eq: "post" } } }
      sort: { fields: frontmatter___publishedAt, order: DESC }
      limit: 3
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
    decks: allDeck {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
