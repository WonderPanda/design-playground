import {
  SimpleGrid,
  ThemeProvider,
  VStack,
  Icon,
  HStack,
  useDisclosure,
  Heading,
  Container,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import {
  FiAirplay,
  FiBarChart,
  FiHelpCircle,
  FiMenu,
  FiShield,
  FiUser,
} from "react-icons/fi";
import "@fontsource/saira";

const menuItems = [
  {
    name: "Admin Dashboard",
    ItemIcon: FiUser,
  },
  {
    name: "Corrective Action Plan",
    ItemIcon: FiBarChart,
  },
  {
    name: "Risk Optimization",
    ItemIcon: FiShield,
  },
  {
    name: "Help",
    ItemIcon: FiHelpCircle,
  },
];

const theme = extendTheme({
  fonts: {
    heading: "Saira",
  },
});

const Sidebar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ThemeProvider theme={theme}>
      <SimpleGrid
        height="100vh"
        width="full"
        gridTemplateColumns={{ base: "min-content 1fr" }}
      >
        <VStack
          p={{ base: 2 }}
          h="full"
          bg="blue.800"
          spacing={16}
          alignItems="start"
        >
          <Icon color="white" as={FiMenu} onClick={onToggle} />
          <VStack alignItems="start" spacing={4}>
            {menuItems.map(({ name, ItemIcon }) => {
              return (
                <HStack key={name}>
                  <Icon fontSize="xl" as={ItemIcon} color="gray.300" />
                  {isOpen && (
                    <Heading
                      fontSize="sm"
                      fontWeight="light"
                      color="white"
                      whiteSpace="nowrap"
                    >
                      {name}
                    </Heading>
                  )}
                </HStack>
              );
            })}
          </VStack>
        </VStack>
        <VStack p={{ base: 2 }} width="full" bg="gray.200" alignItems="start">
          <Container maxW="container.lg">
            <Heading fontSize="2xl">Page</Heading>
          </Container>
        </VStack>
      </SimpleGrid>
    </ThemeProvider>
  );
};

export default Sidebar;
