import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const useFilterSecession = () => {
  const [timeFilterVisible, setTimeFilterVisible] = useState(false);
  const [whereFilterVisible, setWhereFilterVisible] = useState(false);
  const [typeFilterVisible, setTypeFilterVisible] = useState(false);


  return {
    timeFilterVisible,
    setTimeFilterVisible,
    whereFilterVisible,
    setWhereFilterVisible,
    typeFilterVisible,
    setTypeFilterVisible
  };
};
