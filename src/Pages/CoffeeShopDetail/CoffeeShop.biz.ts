import { Footer } from "@/components/Common/Footer/Footer";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { CallApi } from "@/settings/axiosConfig";
import { Box, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const useCoffeeShopDetail = () => {
  const [coffeeShopItem, setCoffeeShopItem] = useState({})
  useEffect(() => {
    CallApi.get(`/coffee-shops/}`).then(({ data }) => {
      setCoffeeShopItem(data)
    })
  },[])
  return {};
};
