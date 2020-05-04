import React from "react"
import { Flex, Box, Heading } from "rebass"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import TableOfContents from "./table-of-contents"

const PostGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 70ch) 1fr;
  grid-template-areas: "toc content .";
  gap: 48px;
`

export default function PostLayout({ data: { mdx } }) {
  return (
    <>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <Header showHomeLink />
      <PostGrid>
        <Flex as="aside" justifyContent="flex-end" sx={{ gridArea: "toc" }}>
          <TableOfContents items={mdx.tableOfContents.items} />
        </Flex>
        <Box as="article" sx={{ gridArea: "content" }}>
          <Heading fontSize={6} fontWeight={900}>
            {mdx.frontmatter.title}
          </Heading>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
      </PostGrid>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
      }
      tableOfContents
    }
  }
`
