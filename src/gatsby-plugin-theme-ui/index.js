export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#1f1f1f",
    background: "#fff",
    primary: "#6AFFC9",
    secondary: "#d1ffee",
    modes: {
      dark: {
        text: "#fff",
        background: "#1f1f1f",
        primary: "#ff006e",
        secondary: "#2e0014",
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
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      fontWeight: "body",
      fontSize: 2,
      lineHeight: "body",
      textAlign: "justify",
      transition: "0.2s",
    },
    text: {
      heading: {
        mt: 5,
        lineHeight: "heading",
        fontSize: 5,
      },
    },
    p: {
      my: 4,
    },
    h2: {
      mt: 5,
    },
    h3: {
      mt: 5,
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
