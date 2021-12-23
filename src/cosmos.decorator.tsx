import React from "react";
import { baseTheme } from "./baseTheme";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/react";
import "typeface-raleway";
require("typeface-raleway");

const decorator: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CSSReset />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      ></link>

      {children}
      {/* </Flex> */}
    </ThemeProvider>
  );
};

export default decorator;
