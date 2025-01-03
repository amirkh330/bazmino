import React from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  Avatar,
  Box,
  chakra,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
export const Transactions = () => {
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4"></chakra.div>
      <Footer />
    </chakra.div>
  );
};
