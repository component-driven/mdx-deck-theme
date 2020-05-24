export default {
  aspectRatio: 9 / 16,
  googleFont: "https://www.monolisa.dev/static/fonts.css",
  fonts: {
    body: "MonoLisa, sans-serif",
    heading: "MonoLisa, sans-serif",
    monospace: "MonoLisa, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  fontSizes: {
    s: "0.8em",
    m: "1em",
    l: "1.5em",
    xl: "2em",
  },
  colors: {
    text: "rgb(27, 37, 79)",
    background: "#fff",
    link: "rgb(27, 37, 79)",
    primary: "rgb(49, 60, 108)",
    muted: "rgb(107, 127, 168)",
    secondary: "rgb(27, 187, 254)",
    accent: "#e64958",
    add: "#2d7b43",
    remove: "#e64958",
  },
  text: {
    heading: {
      mb: 4,
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: "xl",
      textAlign: "center",
    },
    body: {
      mx: 5,
      fontFamily: "body",
      fontWeight: "body",
      fontSize: "m",
    },
    quote: {
      fontFamily: "body",
      fontWeight: "body",
      fontStyle: "italic",
      fontSize: "l",
      textAlign: "center",
    },
  },
  styles: {
    root: {
      m: 0,
      bg: "background",
      fontSize: "2vmax", // Make the typography respond to window size
      fontFamily: "body",
      fontWeight: "body",
      fontFeatureSettings: `'kern', 'pnum', common-ligatures contextual historical-ligatures`,
      WebkitFontKerning: "normal",
      fontKerning: "normal",
      fontVariantNumeric: "proportional-nums",
      fontVariantLigatures: "common-ligatures contextual historical-ligatures",
      "code, pre": {
        fontFamily: "monospace",
      },
    },
    Split: {
      px: 5,
      width: "100%",
      alignItems: "start",
    },
    h1: {
      variant: "text.heading",
      fontSize: "xl",
    },
    h2: {
      variant: "text.heading",
      fontSize: "l",
    },
    h3: {
      variant: "text.heading",
      fontSize: "m",
    },
    p: {
      variant: "text.body",
    },
    ul: {
      p: 0,
    },
    pre: {
      color: "secondary",
      fontFamily: "monospace",
    },
    inlineCode: {
      color: "secondary",
      fontFamily: "monospace",
    },
    code: {
      color: "secondary",
      fontFamily: "monospace",
    },
    figcaption: {
      textAlign: "center",
      fontSize: "s",
    },
    blockquote: {
      variant: "text.quote",
    },
  },
};
