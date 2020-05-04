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
  grid-template-areas: ". title ." ". toc ." ". content .";
  grid-template-columns: 1fr minmax(auto, 70ch) 1fr;
  gap: 0 48px;

  @media screen and (min-width: 1440px) {
    grid-template-areas: ". title ." "toc content .";
  }
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
        <Heading fontSize={6} fontWeight={900} sx={{ gridArea: "title" }}>
          {mdx.frontmatter.title}
        </Heading>
        <Flex
          as="aside"
          justifyContent={["flex-start", null, "flex-end"]}
          sx={{ gridArea: "toc" }}
        >
          <TableOfContents items={mdx.tableOfContents.items} />
        </Flex>
        <Box as="article" sx={{ gridArea: "content" }}>
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
