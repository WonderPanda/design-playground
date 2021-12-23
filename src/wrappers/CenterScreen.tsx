import { Flex } from "@chakra-ui/react";
import React from "react";

export const CenterScreen: React.FC = ({ children }) => {
  return (
    <Flex justifyContent="center" alignItems="center" minH="100vh" p="2">
      {children}
    </Flex>
  );
};
