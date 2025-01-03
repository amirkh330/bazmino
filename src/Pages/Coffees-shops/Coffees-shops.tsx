import { Footer } from "@/components/Common/Footer/Footer";
import { CoffeeCard } from "@/components/CoreComponents/CoffeeCard/CoffeeCard";
import {
  chakra,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const CoffeesShops = () => {
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div px={4} m="0" overflow="auto">
        <InputGroup
          w="70%"
          m="0"
          bg="transparent"
          width="full"
          // my="12px"
          color="amir.common"
          alignItems="center"
          border="1px"
          borderRadius={"8px"}
          borderColor="gray.400"
        >
          <InputRightElement pointerEvents="none">
            <Icon>
              <MagnifyingGlass size={24} />
            </Icon>
          </InputRightElement>
          <Input
            placeholder="جستوجو"
            bg="transparent"
            width="full"
            // p="1"
            ps="8"
            border="none"
            _placeholder={{ color: "amir.common" }}
            _active={{
              border: "none",
              borderColor: "transparent",
            }}
            _focus={{
              border: "none",
              borderColor: "transparent",
            }}
            _hover={{
              border: "none",
              borderColor: "transparent",
            }}
            _focusVisible={{
              border: "none !important",
              borderColor: "transparent",
            }}
          />
        </InputGroup>
        <Text fontSize={"14px"} fontWeight={600} color="amir.common" py="24px">
          کافه ها
        </Text>
        {Array(10).fill("").map((_, index) => {
          return <CoffeeCard key={index}/>
        })}
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
