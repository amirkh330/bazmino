import { extendBaseTheme, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const customTheme = extendBaseTheme({
  colors: {
    amir: {
      mainBg: "#2D2D2D",
      secondaryBg: "#414141",
      primary: "#AFE239",
      secondary: "#CDCDCD",
      common: "#FFFFFF",
    },
  },
});
