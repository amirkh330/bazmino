import { extendBaseTheme, extendTheme, Input, Switch } from "@chakra-ui/react";
import { color } from "framer-motion";

export const customTheme = extendTheme({
  colors: {
    amir: {
      mainBg: "#2D2D2D",
      secondaryBg: "#414141",
      primary: "#AFE239",
      secondary: "#CDCDCD",
      secondaryVariant: "#AFAFAF",
      common: "#FFFFFF",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
    
  },
});
