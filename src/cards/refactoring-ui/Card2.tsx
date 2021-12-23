import React from "react";
import { Box, SimpleGrid, Text, Flex, Image } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Card2 = () => {
  return (
    <SimpleGrid
      gridTemplateRows="repeat(2, min-content)"
      borderRadius="xl"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      fontFamily="sans"
      justifyItems="center"
    >
      <Box bg="white" px={["6", "10"]} pt={["6", "10"]}>
        <Box
          size="6"
          display="inline"
          as={FaQuoteLeft}
          color="teal.100"
          fontSize="lg"
          transform="translateX(-10px)"
        >
          &ldquo;
        </Box>
        <Text
          as="span"
          fontSize={["md", "xl"]}
          fontStyle="italic"
          color="gray.700"
        >
          I don't care what anyone says. The McDouble is the best bang for your
          buck burger on the market. Nothing else even comes close.
        </Text>
        <Box
          as={FaQuoteRight}
          color="teal.100"
          ml="2"
          display="inline"
          size="6"
        >
          &rdquo;
        </Box>
      </Box>
      <Image
        transform="translateY(50%)"
        border="5px"
        borderColor="white"
        borderRadius="full"
        size="85px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&q=80"
      />
      <Flex
        width="100%"
        bg="teal.600"
        backgroundImage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%2326635b' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E")`}
        py="12"
        flexDirection="column"
        alignItems="center"
      >
        <Text color="white" fontSize="xl" fontWeight="extrabold" mb="1">
          Tina Vanstone
        </Text>
        <Text fontSize="lg" fontWeight="bolder" color="hsl(183, 70%, 84%)">
          21 Industries
        </Text>
      </Flex>
    </SimpleGrid>
  );
};
