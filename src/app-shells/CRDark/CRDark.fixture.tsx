import React from "react";
import { ThemeProvider, SimpleGrid } from "@chakra-ui/react";
import { theme } from "./theme";
import { SideNav } from "./SideNav";
import { MainContent } from "./MainContent";
import "@fontsource/saira";

export interface CRDarkProps {}

const CRDark: React.FC<CRDarkProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <SimpleGrid height="100vh" width="full" gridTemplateColumns="1fr 3fr">
        <SideNav />
        <MainContent />
      </SimpleGrid>
    </ThemeProvider>
  );
};

export default CRDark;
