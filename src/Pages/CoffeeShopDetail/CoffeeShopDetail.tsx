import { Footer } from "@/components/Common/Footer/Footer";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { Box, chakra } from "@chakra-ui/react";
import React from "react";
import { useCoffeeShopDetail } from "./CoffeeShop.biz";

export const CoffeeShopDetail = () => {
  const {} = useCoffeeShopDetail();
  return (
    <>
      {true ? (
        <Loading />
      ) : (
        <chakra.div
          display={"flex"}
          mx="0"
          // h="calc(100dvh - 56px)"
          flexDirection="column"
          justifyContent="space-between"
        >
          <chakra.div
            mx="0"
            display={"flex"}
            h="calc(100dvh - 114px)"
            overflow={"auto"}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box p="4"></Box>
          </chakra.div>
          <Footer />
        </chakra.div>
      )}
    </>
  );
};
