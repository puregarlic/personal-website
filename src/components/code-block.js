/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useMemo } from "react"
import { Box } from "rebass"
import { useThemeUI } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import constructTheme from "../utils/construct-theme"

export default function CodeBlock({ children, className, live, globals }) {
  const { theme } = useThemeUI()
  const codeTheme = useMemo(() => constructTheme(theme.colors), [theme])
  const language = className.replace(/language-/, "").split(" ")[0]

  if (live) {
    return (
      <div sx={{ my: 4 }}>
        <LiveProvider code={"\n" + children} theme={codeTheme} scope={globals}>
          <LivePreview
            Component={Box}
            p={4}
            bg="white"
            color="#1f1f1f"
            sx={{
              borderRadius: "9px 9px 0 0",
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "rgb(241, 241, 241)",
            }}
          />
          <LiveEditor
            padding={24}
            style={{ borderRadius: "0 0 9px 9px", zIndex: 2 }}
          />
          <LiveError
            style={{
              fontWeight: 700,
              zIndex: -2,
              padding: 24,
              paddingTop: 36,
              transform: "translateY(-10px)",
              marginTop: 0,
              color: "#1f1f1f",
              background: theme.colors.danger,
              borderRadius: "0 0 9px 9px",
            }}
          />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      theme={codeTheme}
      code={"\n" + children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "24px", borderRadius: "9px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
