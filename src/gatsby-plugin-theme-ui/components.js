import React from "react"

import { ExternalLink } from "../components/links"
import CodeBlock from "../components/code-block"

export default {
  a: props => <ExternalLink {...props} />,
  code: CodeBlock,
}
