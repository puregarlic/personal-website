/** @jsx jsx */
import styled from "@emotion/styled"
import { Box, Flex, Link } from "rebass"
import { jsx, css, Global, keyframes } from "@emotion/core"
import { Fragment, Suspense, lazy, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faDev,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const ConfettiCanvas = lazy(() => import("react-confetti-canvas"))

const wiggle = keyframes`
  from, to { transform: rotate(0); }
  33% { transform: rotate(8deg); }
  66% { transform: rotate(-8deg); }
`

const confettiStyles = css`
  #confetti {
    z-index: -100;
    position: fixed;
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

export default function Footer() {
  const isBrowser = typeof window !== "undefined"
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <Fragment>
      <Global styles={confettiStyles} />
      <Box
        as="footer"
        mt={[5, 6]}
        mb={4}
        mx="auto"
        px="1em"
        sx={{ textAlign: "center", fontWeight: 900 }}
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
      </Box>
      {isBrowser && (
        <Suspense fallback={<div />}>
          {showConfetti && <ConfettiCanvas />}
        </Suspense>
      )}
    </Fragment>
  )
}
