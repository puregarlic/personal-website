import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Link, Flex, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Heading mb={3} sx={{ fontVariant: "small-caps" }}>
      Hi, my name is
    </Heading>
    <Heading fontSize={[8]} fontWeight={900} mb={4}>
      Graham Barber
    </Heading>
    <Heading mt={5} mb={4}>
      About Me
    </Heading>
    <Box px={3}>
      <Text mb={3}>
        I'm a web developer, DevOps engineer, and JavaScript enthusiast
        dedicated to creating delightful experiences—for customers, developers,
        and businesspeople alike.
      </Text>
      <Text mb={3}>
        My passions include cutting-edge web technology, workflow automation,
        and mechanical keyboards.
      </Text>
    </Box>
    {data.projects.nodes.length > 0 && (
      <>
        <Heading mt={5} mb={4}>
          Projects
        </Heading>
        <Flex flexWrap="wrap" px={4} mb={5} as="ul">
          {data.projects.nodes.map(({ name, url }) => (
            <Box key={name} as="li" width={[1, 1 / 2]} mb={3}>
              <Link href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </Link>
            </Box>
          ))}
        </Flex>
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
  }
`
