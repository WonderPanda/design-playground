import {
  SimpleGrid,
  ThemeProvider,
  VStack,
  StackProps,
  Icon,
  HStack,
  useDisclosure,
  Heading,
  Container,
  extendTheme,
  HeadingProps,
  Box,
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
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  Variants,
} from "framer-motion";

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

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionStackProps = Merge<StackProps, HTMLMotionProps<"div">>;

export const MotionVStack: React.FC<MotionStackProps> = motion(VStack);

export const MotionHStack: React.FC<MotionStackProps> = motion(HStack);

export const MotionHeading: React.FC<
  Merge<HeadingProps, HTMLMotionProps<"h3">>
> = motion(Heading);

const Sidebar2: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const drawerVariants = {
    open: {
      minWidth: "250px",
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
    closed: {
      minWidth: "60px",
    },
  };

  const navItemVariants: Variants = {
    open: { opacity: 1, display: "block", x: 0 },
    closed: { opacity: 0, display: "none", x: -10 },
  };

  return (
    <ThemeProvider theme={theme}>
      <HStack h="100vh" w="full" spacing={0} sx={{ boxSizing: "border-box" }}>
        <MotionVStack
          py={{ base: 4 }}
          px={{ base: isOpen ? 3 : 1 }}
          h="full"
          bg="blue.800"
          spacing={16}
          alignItems={isOpen ? "start" : "center"}
          variants={drawerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <Icon
            fontSize="2xl"
            color="white"
            as={FiMenu}
            onClick={onToggle}
            cursor="pointer"
          />
          <VStack alignItems="start" spacing={6}>
            {menuItems.map(({ name, ItemIcon }) => {
              return (
                <MotionHStack key={name} cursor="pointer">
                  <Icon fontSize="2xl" as={ItemIcon} color="gray.300" />
                  <MotionHeading
                    fontSize="sm"
                    fontWeight="light"
                    color="white"
                    whiteSpace="nowrap"
                    variants={navItemVariants}
                  >
                    {name}
                  </MotionHeading>
                </MotionHStack>
              );
            })}
          </VStack>
        </MotionVStack>
        <SimpleGrid
          gridTemplateRows="auto 1fr"
          h="full"
          w="full"
          gridGap={[1, 2, 3]}
        >
          <Box p={[2, 3, 4]} h="full" bg="blue.600" w="full">
            <Heading fontSize="2xl" color="white">
              Page Title
            </Heading>
          </Box>
          <Box p={[2, 3, 4]} h="full">
            Body
          </Box>
        </SimpleGrid>
      </HStack>
    </ThemeProvider>
  );
};

export default Sidebar2;
