import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css, Global, keyframes } from "@emotion/core"
import ConfettiCanvas from "react-confetti-canvas"

import Header from "./header"

const wiggle = keyframes`
  from, to { transform: rotate(0); }
  33% { transform: rotate(8deg); }
  66% { transform: rotate(-8deg); }
`

const confetti = css`
  #confetti {
    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`

const ConfettiButton = styled.button`
  font-size: inherit;
  appearance: none;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    animation: ${wiggle} 0.4s ease-in-out infinite alternate;
  }
`

const Layout = ({ children }) => {
  const [showConfetti, setShowConfetti] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={confetti} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "57ch",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{ width: "100%", textAlign: "center", fontWeight: 900 }}>
          <p>© {new Date().getFullYear()} Graham Barber</p>
          <ConfettiButton onClick={() => setShowConfetti(!showConfetti)}>
            <span role="img" aria-label="party popper">
              🎉
            </span>
          </ConfettiButton>
        </footer>
      </div>
      {showConfetti && <ConfettiCanvas />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
