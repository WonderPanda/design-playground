import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FiShield, FiUser, FiBarChart, FiHelpCircle } from "react-icons/fi";

export interface SideNavProps {}

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

export const SideNav: React.FC<SideNavProps> = () => {
  return (
    <SimpleGrid bg="brand.widget" gridTemplateRows="100px 1fr auto" p={4}>
      <Heading fontSize="2xl" color="white">
        Brand Name
      </Heading>
      <Stack direction="column" spacing={8}>
        {menuItems.map(({ name, ItemIcon }) => {
          return (
            <HStack key={name}>
              <Icon fontSize="xl" as={ItemIcon} color="gray.300" />
              <Heading fontWeight="light">{name}</Heading>
            </HStack>
          );
        })}
      </Stack>
      <Heading as="p" color="gray.300" fontSize="sm" justifySelf="center">
        © 2021 Brand Name, Inc.
      </Heading>
    </SimpleGrid>
  );
};
