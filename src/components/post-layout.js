/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { Flex, Box, Heading } from "rebass"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "./seo"
import Footer from "./footer"
import ColorModeToggle from "./color-mode-toggle"
import TableOfContents from "./table-of-contents"

const PostGrid = styled.main`
  display: grid;
  grid-template-rows: 128px auto auto auto;
  grid-template-areas: ". link toggle ." ". title title ." ". toc toc ." ". content content .";
  grid-template-columns: 1fr minmax(auto, 35ch) minmax(auto, 35ch) 1fr;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    gap: 48px;
    grid-template-rows: 128px auto auto;
    grid-template-areas: ". . . toggle ." ". link title toggle ." ". toc content toggle .";
    grid-template-columns: 1fr 240px minmax(auto, 70ch) 240px 1fr;
  }
`

export default function PostLayout({ data: { mdx }, location }) {
  return (
    <Fragment>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <PostGrid>
        <Flex
          alignItems={["center", null, "flex-start"]}
          sx={{ gridArea: "link" }}
        >
          <Link
            to={location?.state?.referredFrom?.path || "/"}
            replace
            sx={{
              fontSize: "16px",
              color: "text",
              fontWeight: 900,
              textDecoration: `none`,
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} sx={{ marginRight: 2 }} /> Back
            to {location?.state?.referredFrom?.page || "Home"}
          </Link>
        </Flex>
        <Flex
          justifyContent={["flex-end", null, "center"]}
          px={4}
          sx={{ gridArea: "toggle" }}
        >
          <Flex
            height="fit-content"
            sx={{ position: ["relative", null, "sticky"], top: 48 }}
          >
            <ColorModeToggle />
          </Flex>
        </Flex>
        <Heading
          fontSize={6}
          fontWeight={900}
          lineHeight={1.2}
          sx={{ gridArea: "title" }}
        >
          {mdx.frontmatter.title}
        </Heading>

        <Flex
          as="aside"
          justifyContent={["flex-start", null, "flex-end"]}
          sx={{ gridArea: "toc" }}
        >
          <TableOfContents
            slug={mdx.fields.slug}
            items={mdx.tableOfContents.items}
          />
        </Flex>
        <Box as="article" sx={{ gridArea: "content" }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
      </PostGrid>
      <Footer />
    </Fragment>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      tableOfContents
    }
  }
`
