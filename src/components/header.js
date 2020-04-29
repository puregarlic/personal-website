/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({ pathname }) => (
  <header
    sx={{
      marginBottom: `2rem`,
      minHeight: 64,
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {pathname !== "/" && (
        <Link
          to="/"
          sx={{
            fontSize: "16px",
            color: `#333`,
            fontWeight: 900,
            textDecoration: `none`,
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} sx={{ marginRight: 2 }} /> Back to
          Home
        </Link>
      )}
    </div>
  </header>
)

export default Header
