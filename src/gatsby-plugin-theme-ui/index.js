export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#1f1f1f",
    background: "#fff",
    primary: "#6AFFC9",
    secondary: "#4e4cd9",
    muted: "#e3fff5",
    highlight: "#ff006e",
    danger: "#ff3030",
    modes: {
      dark: {
        text: "#fff",
        background: "#1f1f1f",
        primary: "#ff006e",
        secondary: "#8317fc",
        muted: "#2e0014",
        highlight: "#6AFFC9",
        danger: "#ff3030",
      },
    },
  },
  fonts: {
    body: "Inter, system-ui, -apple-system, sans-serif",
    heading: "Inter, system-ui, -apple-system, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: 2,
  },
  breakpoints: ["834px", "1440px", "1920"],
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      fontWeight: "body",
      fontSize: 2,
      lineHeight: "body",
      transition: "0.2s",
    },
    text: {
      heading: {
        mt: 5,
        lineHeight: "heading",
        fontSize: 5,
        letterSpacing: "-0.03em",
      },
    },
    p: {
      my: 4,
      textAlign: "justify",
    },
    inlineCode: {
      bg: "muted",
      p: 1,
      fontWeight: 600,
      borderRadius: "9px",
    },
    h1: {
      fontSize: 6,
      textAlign: "left",
      lineHeight: 1.2,
      fontWeight: 900,
      letterSpacing: "-0.03em",
    },
    h2: {
      mt: 5,
      letterSpacing: "-0.03em",
    },
    h3: {
      mt: 5,
      letterSpacing: "-0.03em",
    },
  },
  buttons: {
    icon: {
      padding: 3,
      height: "auto",
    },
  },
  variants: {
    link: {
      color: "text",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "0.2s",
      background: "linear-gradient(to bottom, #6AFFC9 0%, #6AFFC9 100%)",
      backgroundPosition: "0 100%",
      backgroundRepeat: "repeat-x",
      backgroundSize: "3px 3px",
      ":hover": {
        backgroundSize: "3px 50px",
      },
      icon: {
        color: "text",
        transition: "0.2s",
        ":hover": {
          color: "primary",
        },
      },
    },
    project: {
      color: "text",
      padding: 4,
      width: "50%",
    },
  },
}
