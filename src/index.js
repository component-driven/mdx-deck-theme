import {
  Head,
  Image,
  Notes,
  Split,
  Invert,
  SplitRight,
  FullScreenCode,
} from "mdx-deck";
import theme from "./theme";
import { Box, Flex, Grid } from "theme-ui";
import Center from "./layouts/Center";
import SplitTitle from "./layouts/SplitTitle";
import Primary from "./layouts/Primary";
import Secondary from "./layouts/Secondary";
import AnimatedGradient from "./layouts/AnimatedGradient";
import ThatGuy from "./components/ThatGuy";
import Code from "./components/Code";
import Demo from "./components/Demo";
import Figure from "./components/Figure";
import Video from "./components/Video";
import Cover from "./layouts/Cover";
import TweetEmbed from "react-tweet-embed";
import LiveCode from "./components/LiveCode";

export { Invert };

export const pre = (props) => props.children;

export default {
  ...theme,
  components: {
    Box,
    Flex,
    Grid,
    Head,
    Image,
    Notes,
    Split,
    SplitRight,
    Invert,
    FullScreenCode,
    Center,
    SplitTitle,
    Cover,
    Primary,
    Secondary,
    AnimatedGradient,
    Boom: AnimatedGradient, // deprecated, stays here for compatibility
    Demo,
    Figure,
    ThatGuy,
    Video,
    TweetEmbed,
    LiveCode,
    Code,
    // Markdown overrides
    pre,
    code: Code,
    blockquote: AnimatedGradient,
  },
};
