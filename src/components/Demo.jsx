/* @jsx jsx */
import * as React from "react";
import PropTypes from "prop-types";
import { jsx, Box } from "theme-ui";

function Demo({ src, prodSrc }) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: 20,
          bg: "transparent",
          border: "none",
          cursor: "pointer",
          ":hover": {
            bg: "muted",
          },
        }}
      />
      <iframe
        src={prodSrc && process.env.NODE_ENV === "production" ? prodSrc : src}
        style={{ border: "none", width: "100vw", height: "100vh" }}
      />
    </Box>
  );
}

Demo.propTypes = {
  src: PropTypes.string.isRequired,
  prodSrc: PropTypes.string,
};

export default Demo;
