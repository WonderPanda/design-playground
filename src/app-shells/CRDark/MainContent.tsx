import {
  Box,
  BoxProps,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export interface MainContentProps {}

type Widget = {
  name: string;
} & BoxProps;

const widgets: Widget[] = [
  {
    name: "Map View",
    gridColumn: { lg: "1 / 3", xl: "4" },
    gridRow: { xl: "span 3" },
  },
  {
    name: "Location Distribution",
    gridColumn: { lg: "1 / 3", xl: "1 / 4" },
    gridRow: { xl: 1 },
  },
  {
    name: "Avg. Threat Scorecard",
  },
  {
    name: "Avg. Hazard Scorecard",
  },
  {
    name: "Avg. Compliance Scorecard",
  },
  {
    name: "Regional Metrics",
  },
  {
    name: "Buildings By Type",
  },
  {
    name: "Countermeasures Needed",
  },
];

const Widget: React.FC<{ name: string } & BoxProps> = ({ name, ...rest }) => {
  return (
    <Box
      bg="brand.widget"
      width="full"
      height="full"
      borderRadius="xl"
      p={2}
      {...rest}
    >
      <Heading variant="widget">{name}</Heading>
    </Box>
  );
};

export const MainContent: React.FC<MainContentProps> = () => {
  return (
    <SimpleGrid
      bg={["purple.500", "green.500", "brand.background"]}
      py={4}
      px={[2, 3, 4]}
      gridTemplateRows="100px 1fr"
      gap={[2, 3, 4]}
    >
      <HStack>
        <VStack alignItems="start" spacing={3}>
          <Heading size="title">Page Title</Heading>
          <Heading size="subTitle">Subtitle</Heading>
        </VStack>
      </HStack>
      <SimpleGrid
        gap={[2, 3, 6]}
        borderColor="white"
        gridTemplateColumns={{ lg: "1fr 1fr", xl: "repeat(3, 1fr) 2fr" }}
      >
        {widgets.map(({ name, ...rest }) => {
          return <Widget key={name} name={name} {...rest} />;
        })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
