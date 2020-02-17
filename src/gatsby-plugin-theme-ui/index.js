export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#75D1C5",
    modes: {
      dark: {
        text: "#fff",
        background: "#0f0f0f",
        primary: "#D98ED6",
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
    body: 1.6,
    heading: 0.9,
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      fontWeight: "body",
      fontSize: 3,
      lineHeight: "body",
      textAlign: "justify",
    },
    text: {
      heading: {
        lineHeight: "heading",
        fontSize: 5,
      },
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
      color: "primary",
      icon: {
        color: "text",
        transition: "0.1s ease-in-out",
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
