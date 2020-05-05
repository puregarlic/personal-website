/** @jsx jsx */
import { jsx } from "theme-ui"
import { Button } from "rebass"
import { useThemeUI } from "theme-ui"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ColorModeToggle() {
  const { colorMode, setColorMode } = useThemeUI()

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
  )
}
