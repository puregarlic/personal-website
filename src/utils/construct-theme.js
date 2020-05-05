import { grayscale } from "polished"

export default function constructTheme(colors) {
  return {
    plain: {
      backgroundColor: grayscale(colors.muted),
      color: colors.text,
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
        style: {
          color: "#6D6D6D",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["tag", "operator", "number"],
        style: {
          color: colors.highlight,
        },
      },
      {
        types: ["property", "function"],
        style: {
          color: colors.highlight,
        },
      },
      {
        types: ["tag-id", "selector", "atrule-id"],
        style: {
          color: "#eeebff",
        },
      },
      {
        types: ["attr-name"],
        style: {
          color: colors.secondary,
        },
      },
      {
        types: [
          "boolean",
          "string",
          "entity",
          "url",
          "attr-value",
          "keyword",
          "control",
          "directive",
          "unit",
          "statement",
          "regex",
          "at-rule",
          "placeholder",
          "variable",
        ],
        style: {
          color: colors.text,
        },
      },
      {
        types: ["deleted"],
        style: {
          textDecorationLine: "line-through",
        },
      },
      {
        types: ["inserted"],
        style: {
          textDecorationLine: "underline",
        },
      },
      {
        types: ["italic"],
        style: {
          fontStyle: "italic",
        },
      },
      {
        types: ["important", "bold"],
        style: {
          fontWeight: "bold",
        },
      },
      {
        types: ["important"],
        style: {
          color: "#c4b9fe",
        },
      },
    ],
  }
}
