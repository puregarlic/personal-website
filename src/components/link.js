/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as LinkBase } from "rebass"
import { useThemeUI } from "theme-ui"

export function Link(props) {
  const { theme, colorMode } = useThemeUI()
  const bgColor =
    colorMode === "dark"
      ? theme.colors.modes.dark.primary
      : theme.colors.primary
  const backgroundImage = `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 100%)`

  return (
    <LinkBase
      {...props}
      sx={{ ...props?.sx, backgroundImage }}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
