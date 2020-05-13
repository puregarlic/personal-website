/** @jsx jsx */
import { jsx } from "theme-ui"
import { useThemeUI } from "theme-ui"
import { Link as LinkBase } from "rebass"
import { Link as GatsbyLink } from "gatsby"
import { AnchorLink as AnchorLinkBase } from "gatsby-plugin-anchor-links"

function constructBackgroundImage(mode = "default", theme) {
  const bgColor =
    mode === "dark" ? theme.colors.modes.dark.primary : theme.colors.primary
  return `linear-gradient(to bottom, ${bgColor} 0%, ${bgColor} 100%)`
}

export function InternalLink(props) {
  const { theme, colorMode } = useThemeUI()
  const backgroundImage = constructBackgroundImage(colorMode, theme)
  const { sx, ...rest } = props

  return (
    <GatsbyLink
      sx={{ ...sx, ...theme.variants.link, backgroundImage }}
      {...rest}
    />
  )
}

export function AnchorLink(props) {
  const { theme, colorMode } = useThemeUI()
  const backgroundImage = constructBackgroundImage(colorMode, theme)
  const { sx, ...rest } = props

  return (
    <AnchorLinkBase
      sx={{ ...sx, ...theme.variants.link, backgroundImage }}
      {...rest}
    />
  )
}

export function ExternalLink(props) {
  const { theme, colorMode } = useThemeUI()
  const backgroundImage = constructBackgroundImage(colorMode, theme)
  const { sx, ...rest } = props

  return (
    <LinkBase
      sx={{ ...sx, ...theme.variants.link, backgroundImage }}
      {...rest}
    />
  )
}
