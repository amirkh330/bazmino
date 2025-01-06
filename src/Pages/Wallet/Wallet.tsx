import React from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Toman } from "@/utils/Toman/Toman";
export const Wallet = () => {
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4" my="4" mx="auto">
        <Image src="/images/wallet.svg" />
        <Text
          my="4"
          textAlign="center"
          fontSize={"14px"}
          fontWeight={400}
          color={"amir.common"}
        >
          موجودی کیف پول:
        </Text>
        <Text
          textAlign="center"
          fontSize={"16px"}
          fontWeight={600}
          color={"amir.common"}
        >
          {Toman(2222200)}
        </Text>
      </chakra.div>
      <chakra.div px="4" my="4" mx="0">
        <Button
          w="full"
          variant="outline"
          borderColor="amir.primary"
          color="amir.primary"
        >
          برداشت موجودی
        </Button>
      </chakra.div>
    </chakra.div>
  );
};
