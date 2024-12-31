import { CloseButton, Flex, Tag } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const list = Array.from(searchParams.entries()).map(([key, value]) => {
    return { key, value };
  });

  const removeFilter = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return (
    <Flex my="2" justifyContent={"flex-start"} gap={2}>
      {list.map((item) => {
        if (!item) return null;
        return (
          <Tag
            borderRadius={"6px"}
            gap="8px"
            py="1"
            mx="0"
            px="12px"
            bgColor={"amir.primary"}
            color={"amir.mainBg"}
            fontSize={"16px"}
          >
            {item.value}
            <CloseButton
              fontSize="10px"
              onClick={() => removeFilter(item.key)}
            />
          </Tag>
        );
      })}
    </Flex>
  );
};
