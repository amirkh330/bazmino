import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useCityFilter } from "./CityFilter.biz";

export const CityFilter = ({handleFilterChange}:any) => {
  const {whereFilterVisible, setWhereFilterVisible  } = useCityFilter();
  return (
    <div>
      <Box {...boxStyles} onClick={() => setWhereFilterVisible(true)}>
        <Text fontSize={"16px"}>کجا بریم؟</Text>
      </Box>
      <BottomSheet
        title={"کجا بازی کنیم؟"}
        isOpen={whereFilterVisible}
        onOpen={() => {}}
        onClose={()=>setWhereFilterVisible(false)}
      >
        <Box p="4" m="0">
          <Flex
            m="0"
            alignItems={"center"}
            gap="2"
            justifyContent={"flex-start"}
          >
            <Checkbox color="amir.primary">
              <Text color="amir.common" fontSize={"16px"}>
                ری
              </Text>
            </Checkbox>
          </Flex>
        </Box>
      </BottomSheet>
    </div>
  );
};
const boxStyles = {
  w: "92",
  borderRadius: "6px",
  p: "4",
  border: "1px",
  cursor: "pointer",
  color: "amir.common",
  borderColor: "amir.secondaryVariant",
};
