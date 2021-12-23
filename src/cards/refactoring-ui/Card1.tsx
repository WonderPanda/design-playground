import React from "react";
import { Box, Text, SimpleGrid, Flex, Button, Stack } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";

const CardBottom: React.FC = () => (
  <SimpleGrid
    bg="gray.100"
    px="6"
    py="4"
    gridTemplateColumns="auto min-content"
    alignItems="center"
  >
    <Box>
      <Flex fontSize="lg" mb="1">
        <Text fontWeight="extrabold" fontSize="lg">
          $17&nbsp;
        </Text>
        <Text fontWeight="hairline" color="gray.600">
          Dollars Per Person
        </Text>
      </Flex>
      <Flex alignItems="center">
        {Array(5)
          .fill(0)
          .map((x, i) => (
            <Box key={i} as={FiStar} color="teal.500" fill="teal.500" mr="1" />
          ))}
        <Text color="gray.600" ml="2">
          28 Reviews
        </Text>
      </Flex>
    </Box>
    <Button
      bg="blue.600"
      color="white"
      px="12"
      size="lg"
      borderRadius="lg"
      _hover={{
        bg: "blue.500",
      }}
    >
      Book Now
    </Button>
    <Text gridColumn="span 2" color="gray.500">
      *Prices may vary depending on selected date.
    </Text>
  </SimpleGrid>
);

export const Card1: React.FC = () => {
  return (
    <SimpleGrid
      bg="white"
      shadow="xl"
      maxW="containers.md"
      minH="xs"
      borderRadius="xl"
      gridTemplateColumns="2fr 5fr"
      gridTemplateRows="auto auto"
      overflow="hidden"
      fontFamily="sans"
    >
      <Box
        gridRow="1 / 3"
        bg="red.200"
        bgSize="cover"
        bgImg="url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)"
      ></Box>
      <Box pt="6" px="6">
        <Stack spacing="3">
          <Text fontFamily="sans" fontSize="2xl" fontWeight="extrabold">
            Amsterdam Walking Tour
          </Text>
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            Explore popular tourist destinations as well as hidden local
            favourites
          </Text>
        </Stack>
      </Box>
      <CardBottom />
    </SimpleGrid>
  );
};
