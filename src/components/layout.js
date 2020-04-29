/** @jsx jsx */
import { Fragment, useState, lazy, Suspense } from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Flex, Link } from "rebass"
import { css, Global, keyframes } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faDev,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

import Header from "./header"

const ConfettiCanvas = lazy(() => import("react-confetti-canvas"))

const wiggle = keyframes`
  from, to { transform: rotate(0); }
  33% { transform: rotate(8deg); }
  66% { transform: rotate(-8deg); }
`

const styles = css`
  #confetti {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: -0.03em;
  }

  ::selection {
    background-color: #ff006e;
    color: white;
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
    <Fragment>
      <Global styles={styles} />
      <Header pathname={pathname} />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: "70ch",
          padding: `0 1em`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          sx={{
            mt: [5, 6],
            mb: 4,
            width: "100%",
            textAlign: "center",
            fontWeight: 900,
          }}
        >
          <Flex mb={3} width={1} justifyContent="center">
            <Link
              href="https://github.com/puregarlic"
              variant="link.icon"
              mr={3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </Link>
            <Link
              href="https://twitter.com/puregarlic_"
              variant="link.icon"
              mr={3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </Link>
            <Link
              href="https://dev.to/puregarlic"
              variant="link.icon"
              mr={3}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDev} size="2x" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/graham-barber"
              variant="link.icon"
              mr={2}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
          </Flex>
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
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
