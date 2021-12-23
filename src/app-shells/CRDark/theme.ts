import { extendTheme } from "@chakra-ui/react";

const Heading = {
  baseStyle: {
    fontWeight: "light",
    color: "gray.100",
    // fontSize: "sm",
    // fontSize: "sm",
    // fontSize: ["2xl", "xl"],
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    subTitle: {
      fontSize: "xl",
    },
    title: {
      fontSize: "3xl",
      fontWeight: "medium",
    },
  },
  defaultProps: {
    size: "sm",
  },
};

export const theme = extendTheme({
  colors: {
    brand: {
      widget: "#1C1C24",
      background: "#13131A",
    },
  },
  fonts: {
    heading: "Saira",
  },
  components: {
    Heading,
  },
});
