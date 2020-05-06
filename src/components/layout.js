/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Footer from "./footer"
import ColorModeToggle from "./color-mode-toggle"

const LayoutGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 128px auto;
  grid-template-areas: ". link toggle ." ". content content .";
  grid-template-columns: 1fr minmax(auto, 35ch) minmax(auto, 35ch) 1fr;

  @media screen and (min-width: 1440px) {
    gap: 48px;
    grid-template-areas: ". . . toggle ." ". link content toggle .";
    grid-template-columns: 1fr 240px minmax(auto, 70ch) 240px 1fr;
  }
`

const Layout = ({ children, showLink = true, referredFrom }) => {
  return (
    <Fragment>
      <LayoutGrid>
        {showLink && (
          <Flex
            alignItems={["center", null, "flex-start"]}
            sx={{ gridArea: "link" }}
          >
            <Link
              to={referredFrom?.path || "/"}
              replace
              sx={{
                fontSize: "16px",
                color: "text",
                fontWeight: 900,
                textDecoration: `none`,
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} sx={{ marginRight: 2 }} />{" "}
              Back to {referredFrom?.page || "Home"}
            </Link>
          </Flex>
        )}
        <Flex
          px={4}
          justifyContent={["flex-end", null, "center"]}
          sx={{ gridArea: "toggle" }}
        >
          <Flex
            height="fit-content"
            sx={{ position: ["relative", null, "sticky"], top: 48 }}
          >
            <ColorModeToggle />
          </Flex>
        </Flex>
        <Box as="main" sx={{ gridArea: "content" }}>
          {children}
        </Box>
      </LayoutGrid>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
