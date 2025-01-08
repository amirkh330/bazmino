import { Footer } from "@/components/Common/Footer/Footer";
import { CoffeeCard } from "@/components/CoreComponents/CoffeeCard/CoffeeCard";
import { CallApi } from "@/settings/axiosConfig";
import {
  chakra,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const useCoffeesShops = () => {
  const [coffeeShopList, setCoffeeShopList] = useState([]);
  useEffect(() => {
    CallApi.get(`/hosts/_filter`).then(({ data }) => {
      console.log(data);
    });
  }, []);
  return {};
};
