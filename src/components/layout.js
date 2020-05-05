import React from "react"
import PropTypes from "prop-types"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"

import Footer from "./footer"
import ColorModeToggle from "./color-mode-toggle"

const LayoutGrid = styled.div`
  display: grid;
  gap: 0 24px;
  grid-template-rows: 128px auto;
  grid-template-areas: ". . toggle ." ". content content .";
  grid-template-columns: 1fr minmax(auto, 35ch) minmax(auto, 35ch) 1fr;

  @media screen and (min-width: 1440px) {
    gap: 0 48px;
    grid-template-areas: ". . . toggle ." ". . content toggle .";
    grid-template-columns: 1fr 240px minmax(auto, 70ch) 240px 1fr;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <LayoutGrid>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
