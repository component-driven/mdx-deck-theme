# mdx-deck-theme

Component-Driven theme for presentations

## Installation

```
npm install --save @component-driven/mdx-deck-theme
```

## Usage

In your deck MDX file:

```mdx
import CDTheme from "@component-driven/mdx-deck-theme";

export const theme = { ...CDTheme };

;
```

Note: for some reason, it doesn't work without spreading.

See [example](examples/example.mdx)
