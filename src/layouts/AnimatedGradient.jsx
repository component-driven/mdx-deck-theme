import { css } from "theme-ui";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Invert } from "mdx-deck";

const animation = keyframes`
	0% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0 50%;
	}
`;

export default styled(Invert)(
	css((theme) => ({
        position: "absolute",
        width: "100vw",
        height: "100vh",
		background: `linear-gradient(270deg, ${theme.colors.primary}, ${theme.colors.accent})`,
		backgroundSize: "400% 400%",
		animation: `${animation} 10s infinite`,
	}))
);
