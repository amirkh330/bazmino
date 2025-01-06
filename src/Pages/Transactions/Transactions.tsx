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
import { Toman } from "@/utils/Toman/Toman";
export const Transactions = () => {
  return (
    <chakra.div
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4" px="4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="space-between"
              p="2"
              my="4"
              borderRadius="8px"
              bg="amir.secondaryBg"
            >
              <Box mx="0">
                <Text fontSize={"14px"} fontWeight={500} color="amir.common">
                  برداشت از کیف پول
                </Text>
                <Text
                  my="1"
                  fontSize={"14px"}
                  fontWeight={500}
                  color="amir.common"
                >
                  سه‌شنبه ۱۲ بهمن
                </Text>
              </Box>
              <Box mx="0" textAlign={"center"}>
                <Text fontSize={"14px"} fontWeight={500} color="amir.common">
                  {Toman(120000)}
                </Text>
                <Text
                  my="1"
                  mx="auto"
                  borderRadius="10px"
                  textAlign={"center"}
                  p={"4px"}
                  w={"fit-content"}
                  bg="green.200"
                  fontWeight={400}
                  fontSize={"12px"}
                  color="green.700"
                >
                  موفق
                </Text>
              </Box>
            </Flex>
          ))}
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
