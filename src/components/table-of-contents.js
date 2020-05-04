/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Link from "./link"

const TOCSubList = styled.ul`
  list-style-type: none;
  padding-left: 24px;
`

function TableOfContentsLink({ url, title, items }) {
  return (
    <li>
      <Link external={false} href={url}>
        {title}
      </Link>
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

function TableOfContents({ items }) {
  return (
    <TOCSubList
      sx={{
        width: 240,
        marginTop: 48,
        padding: 0,
        position: "sticky",
        top: 48,
        height: "fit-content",
      }}
    >
      {items.map(item => (
        <TableOfContentsLink
          key={item.url}
          url={item.url}
          title={item.title}
          items={item.items}
        />
      ))}
    </TOCSubList>
  )
}

export default TableOfContents
