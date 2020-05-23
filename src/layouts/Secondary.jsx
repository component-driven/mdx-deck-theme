import React from "react";
import {Invert} from "mdx-deck";

export default ({children, imgSrc, sx,...props}) => <Invert sx={{
	backgroundColor: "secondary",
	backgroundSize: "cover",
	backgroundImage: `url(${imgSrc})`,
	backgroundPosition: "center",
	backgroundBlendMode: "multiply",
	...sx,
}} {...props}>
	{children}
</Invert>;