/** @jsx jsx */
import * as React from "react";
import PropTypes from "prop-types";
import {jsx, Flex, Image, Text} from "theme-ui";

function Figure({ src, alt, caption, ...props }) {
  return (
    <Flex
      as="figure"
      gap={4}
      {...props}
      sx={{
        flexDirection: "column",
        justifyItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Flex
        sx={{
          flexGrow: 1,
          maxHeight: "90%",
          justifyContent: "center",
        }}
      >
        <Image src={src} alt={alt} sx={{ objectFit: "scale-down" }} />
      </Flex>
      {caption && (
        <Text as="figcaption" variant="styles.figcaption" sx={{ mt: 4 }}>
          {caption}
        </Text>
      )}
    </Flex>
  );
}

Figure.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	caption: PropTypes.node,
};

export default Figure;
