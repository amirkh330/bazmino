import { EventCard } from "@/components/CoreComponnets/EventCard/EventCard";
import { FilterSecession } from "@/components/CoreComponnets/FilterSecession/FilterSecession";
import {
  Box,
  Flex,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

export const Events = () => {
  return (
    <div>
      <InputGroup
        w="70%"
        m="0"
        bg="transparent"
        width="full"
        my="12px"
        color="amir.common"
        alignItems="center"
        border="1px"
        borderRadius={"8px"}
        borderColor="gray.400"
     
      >
        <InputRightElement pointerEvents="none" m="3" me="4">
          <Icon>
            <MagnifyingGlass size={24} />
          </Icon>
        </InputRightElement>
        <Input
          placeholder="جستوجو"
          bg="transparent"
          width="full"
          p="1"
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
      <FilterSecession />
      <Box h="58vh" overflowY="auto">
        <Grid templateColumns="repeat(2, 1fr)">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return <EventCard />;
            })}
        </Grid>
      </Box>
    </div>
  );
};
