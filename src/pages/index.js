import React from "react"
import { graphql } from "gatsby"
import { Heading, Text, Link, Flex, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Heading mb={3} sx={{ fontVariant: "small-caps" }}>
      Hello, my name is
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
        dedicated to creating delightful experiences for customers, developers,
        and businesspeople alike.
      </Text>
      <Text mb={3}>
        My passions include staying up-to-date with cutting-edge web technology,
        automating workflows, and customizing mechanical keyboards. I also enjoy
        public speaking and creating mental catalogs of just about anything.
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
    <Heading mt={5} mb={4}>
      Education
    </Heading>
    <Flex p={4} mb={4} bg="text" flexWrap="wrap" sx={{ borderRadius: 3 }}>
      <Heading width={[1, 2 / 3]} fontSize={3} mb={[2, 3]} color="background">
        BS in Management <span style={{ fontWeight: 400 }}>in Progress</span>
      </Heading>
      <Text
        mb={[3, 0]}
        width={[1, 1 / 3]}
        textAlign={["left", "right"]}
        lineHeight={1}
        fontSize={2}
        color="background"
      >
        June 2020
      </Text>
      <Text width={[2 / 3]} color="background" fontSize={2} lineHeight={1}>
        Oregon State University
      </Text>
      <Text
        width={[1 / 3]}
        textAlign={["left", "right"]}
        color="background"
        fontSize={2}
        lineHeight={1}
      >
        Corvallis, OR
      </Text>
    </Flex>
    <Text px={3} mb={6}>
      Why Management? As a self-taught web developer in high school, I wanted to
      learn how to apply my expertise in a business context. The best products
      are created when designers, developers, and businesspeople understand each
      others' processes—so I went to school to discover how to facilitate that
      communication.
    </Text>
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
