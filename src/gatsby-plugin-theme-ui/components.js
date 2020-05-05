import React from "react"

import Link from "../components/link"
import CodeBlock from "../components/code-block"

export default {
  a: props => <Link {...props} />,
  code: CodeBlock,
}
