/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useThemeUI } from "theme-ui"
import { Link as LinkBase } from "rebass"
import { Link as GatsbyLink } from "gatsby"

export default function Link(props) {
  const { theme, colorMode } = useThemeUI()
  const bgColor =
    colorMode === "dark"
      ? theme.colors.modes.dark.primary
      : theme.colors.primary
  const backgroundImage = `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 100%)`

  const { internal = false, sx, ...rest } = props

  if (internal) {
    return (
      <GatsbyLink
        sx={{ backgroundImage, ...theme.variants.link, ...sx }}
        {...rest}
      />
    )
  }

  return (
    <LinkBase
      sx={{ ...sx, backgroundImage }}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  )
}

Link.propTypes = {
  internal: PropTypes.bool,
}
