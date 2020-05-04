/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "rebass"
import { useThemeUI } from "theme-ui"
import { Global } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const Header = ({ showHomeLink }) => {
  const { theme, colorMode, setColorMode } = useThemeUI()

  function toggleTheme() {
    switch (colorMode) {
      case "dark":
        setColorMode("default")
        break
      default:
        setColorMode("dark")
        break
    }
  }

  return (
    <header
      sx={{
        marginBottom: `2rem`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Global
        styles={{
          "::selection": {
            backgroundColor: theme.colors.highlight,
            color: theme.colors.background,
          },
        }}
      />
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          flexBasis: 960,
          padding: `2em 1em`,
        }}
      >
        <Button
          variant="icon"
          onClick={toggleTheme}
          p={1}
          bg="transparent"
          color="text"
          sx={{
            transition: "0.2s",
            borderRadius: "100%",
            display: "flex",
            alignContent: "center",
            ":hover": {
              bg: "primary",
            },
          }}
        >
          <FontAwesomeIcon
            icon={colorMode === "default" ? faSun : faMoon}
            sx={{ display: "block" }}
          />
        </Button>
        {showHomeLink && (
          <Link
            to="/"
            sx={{
              fontSize: "16px",
              color: "text",
              fontWeight: 900,
              textDecoration: `none`,
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} sx={{ marginRight: 2 }} /> Back
            to Home
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
