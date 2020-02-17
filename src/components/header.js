import { Link } from "gatsby"
import React from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({ pathname }) => (
  <header
    style={{
      marginBottom: `2rem`,
      minHeight: 64,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {pathname !== "/" && (
        <Link
          to="/"
          style={{
            fontSize: "16px",
            color: `#333`,
            fontWeight: 900,
            textDecoration: `none`,
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </Link>
      )}
    </div>
  </header>
)

export default Header
