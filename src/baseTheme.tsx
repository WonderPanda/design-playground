import { theme, extendTheme } from "@chakra-ui/react";

export const baseTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    sans: `'Raleway', "Source Sans Pro", sans-serif`,
  },
  radii: {
    ...theme.radii,
    xl: ".75rem",
  },
  borders: {
    ...theme.borders,
    "5px": "5px solid",
    "6px": "6px solid",
  },
} as const;
