import React from "react";
import { Box } from "theme-ui";
import { Invert } from "mdx-deck";

export default ({ children, imgSrc, sx, ...props }) => (
  <Invert
    sx={{
      position: "absolute",
      width: "100vw",
      height: "100vh",
      backgroundColor: "primary",
      backgroundSize: "cover",
      backgroundImage: `url(${imgSrc})`,
      backgroundPosition: "center",
      backgroundBlendMode: "multiply",
      ...sx,
    }}
    {...props}
  >
    <Box sx={{ m: -5, p: 5 }}>{children}</Box>
  </Invert>
);
