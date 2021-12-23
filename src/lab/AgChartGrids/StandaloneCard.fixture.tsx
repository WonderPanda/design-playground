import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SizeMe } from "react-sizeme";
import { PieChart } from "./PieChart";

const StandaloneCard: React.FC = () => {
  return (
    <SimpleGrid
      minHeight={{ base: "200px" }}
      p={[1, 2, 3]}
      gridTemplateRows={{ base: "auto 1fr" }}
      gridTemplateColumns={"300px"}
      bg="blue.500"
    >
      <Heading fontSize="xl">Heading</Heading>
      <SizeMe monitorHeight>
        {({ size }) => {
          console.log(size);
          return (
            <Box h="100%" bg="blue.800" p={[1, 2, 3]}>
              <PieChart />
              {/* Pie Chart */}
            </Box>
          );
        }}
      </SizeMe>
    </SimpleGrid>
  );
};

export default StandaloneCard;
