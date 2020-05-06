/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Heading } from "rebass"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Link from "./link"

const TOCSubList = styled.ul`
  list-style-type: none;
  padding-left: 16px;
`

function TableOfContentsLink({ url, title, items }) {
  const { theme } = useThemeUI()

  return (
    <li sx={{ lineHeight: 1, mb: 3 }}>
      <AnchorLink to={url} sx={{ ...theme.variants.link }}>
        {title}
      </AnchorLink>
      {items && (
        <TOCSubList>
          {items.map(item => (
            <TableOfContentsLink key={item.url} {...item} />
          ))}
        </TOCSubList>
      )}
    </li>
  )
}

TableOfContentsLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function TableOfContents({ items, slug }) {
  return (
    <TOCSubList
      sx={{
        width: 240,
        marginTop: 32,
        padding: 0,
        position: "sticky",
        top: 48,
        height: "fit-content",
      }}
    >
      <Heading mb={3}>Table of Contents</Heading>
      {items.map(item => (
        <TableOfContentsLink
          key={item.url}
          url={`/${slug}${item.url}`}
          title={item.title}
          items={item.items}
        />
      ))}
    </TOCSubList>
  )
}

export default TableOfContents
