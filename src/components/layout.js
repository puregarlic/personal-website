import React, { useState, lazy, Suspense } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css, Global, keyframes } from "@emotion/core"

import Header from "./header"

const ConfettiCanvas = lazy(() => import("react-confetti-canvas"))

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

const Layout = ({ children, pathname }) => {
  const isSSR = typeof window === "undefined"
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <>
      <Global styles={confetti} />
      <Header pathname={pathname} />
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
      {!isSSR && (
        <Suspense fallback={<div />}>
          {showConfetti && <ConfettiCanvas />}
        </Suspense>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
