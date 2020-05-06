/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Heading, Flex, Text } from "rebass"

import { pathToRoute } from "../utils/path-to-route"

function PostLink(props) {
  const { theme } = useThemeUI()

  return (
    <Link
      to={pathToRoute(props.fileAbsolutePath, "blog")}
      state={{ referredFrom: props.referredFrom }}
      mb={4}
      p={3}
      sx={{
        ...theme.variants.link,
        mb: 4,
        p: 3,
        background: "none",
        display: "block",
        fontWeight: 400,
        borderLeftStyle: "solid",
        borderLeftWidth: "5px",
        borderLeftColor: "primary",
        borderRadius: "0 9px 9px 0",
        ":hover": {
          transform: "translateX(1em)",
          bg: "muted",
        },
        ":active": {
          transform: "translateX(2em)",
        },
      }}
    >
      <Heading fontSize={3} mb={1}>
        {props.title}
      </Heading>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        mb={2}
        sx={{ fontFeatureSettings: '"tnum" on' }}
      >
        <Text color="grey">{`Published ${props.publishedAt}`}</Text>
        <Text color="grey">{`${props.timeToRead} minute read | ${props.wordCount} words`}</Text>
      </Flex>
      <Text>{props.description}</Text>
    </Link>
  )
}

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  wordCount: PropTypes.number.isRequired,
  fileAbsolutePath: PropTypes.string.isRequired,
}

export default PostLink
