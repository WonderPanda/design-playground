import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { times } from "lodash";
import { PieChart } from "./PieChart";

export interface AgChartGrids {}

const ChartWidget: React.FC<{ includeExtraRow?: boolean }> = ({
  includeExtraRow,
}) => {
  const rows = includeExtraRow ? "auto auto 1fr" : "auto 1fr";

  return (
    <SimpleGrid
      minHeight={{ base: "300px" }}
      maxHeight={{ base: "400px", md: "lg" }}
      p={[1, 2, 3]}
      gridTemplateRows={{ base: rows }}
      bg="blue.500"
      overflow="hidden"
    >
      <Heading fontSize="xl">Heading</Heading>
      {includeExtraRow && <Heading fontSize="lg">SubHeading</Heading>}
      <Box overflow={"hidden"} h="100%" w="full" bg="blue.800" p={[1, 2, 3]}>
        <PieChart />
      </Box>
    </SimpleGrid>
  );
};

const AgChartGrids: React.FC<AgChartGrids> = () => {
  return (
    <SimpleGrid
      boxSizing="border-box"
      display={{ base: "flex", md: "grid" }}
      flexDirection={{ base: "column", md: "unset" }}
      // height={{ base: "100%", md: "100vh" }}
      height={{ lg: "100vh" }}
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
      // The fact that we don't need to assign rows and the charts split the available space
      // is really interesting
      gap={[1, 2, 3]}
      p={[2, 4, 6]}
      bg={{
        base: "green.300",
        sm: "red.300",
        md: "purple.300",
        lg: "cyan.300",
      }}
    >
      {times(5).map((i) => (
        <ChartWidget
          // includeExtraRow={i % 2 === 0}
          key={i}
        />
      ))}
    </SimpleGrid>
  );
};

export default AgChartGrids;
