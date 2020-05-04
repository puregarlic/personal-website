import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Box } from "rebass"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box as="main" mx="auto" maxWidth="70ch" px="1em">
        {children}
      </Box>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
