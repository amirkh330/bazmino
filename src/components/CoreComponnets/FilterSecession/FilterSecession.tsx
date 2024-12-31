import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Flex,
  Image,
  Select,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useFilterSecession } from "./FilterSecession.biz";
import BottomSheet from "../BottomSheet/BottomSheet";
import { useNavigate } from "react-router-dom";
import { CustomDatePicker } from "../CustomDatePicker/CustomDatePicker";
// import GolYaPoch from "@/images/golyapooch.svg";

export const FilterSecession = () => {
  const {
    timeFilterVisible,
    setTimeFilterVisible,
    whereFilterVisible,
    setWhereFilterVisible,
    typeFilterVisible,
    setTypeFilterVisible,
  } = useFilterSecession();
  return (
    <>
      <Flex gap="8" alignItems={"center"}>
        <Box {...boxStyles} onClick={() => setTypeFilterVisible(true)}>
          <Text fontSize={"16px"}>چی بازی؟</Text>
        </Box>
        <Box {...boxStyles} onClick={() => setTimeFilterVisible(true)}>
          <Text fontSize={"16px"}>کِی بریم؟</Text>
        </Box>
        <Box {...boxStyles} onClick={() => setWhereFilterVisible(true)}>
          <Text fontSize={"16px"}>کجا بریم؟</Text>
        </Box>
      </Flex>
      <Flex my="4" justifyContent={"flex-start"}>
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
          اسب
          <CloseButton fontSize="10px" />
        </Tag>
      </Flex>
      <TimeFilterModal
        isOpen={timeFilterVisible}
        onClose={() => setTimeFilterVisible(false)}
      />
      <TypeFilterModal
        isOpen={typeFilterVisible}
        onClose={() => setTypeFilterVisible(false)}
      />
      <WhereFilterModal
        isOpen={whereFilterVisible}
        onClose={() => setWhereFilterVisible(false)}
      />
    </>
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

const TimeFilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <BottomSheet
      title={"کی بازی کنیم؟"}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <Box p="4">
        <CustomDatePicker setValue={{}} value={""} />
        <Button
          w="full"
          p="2"
          bgColor={"amir.primary"}
          borderRadius={"8px"}
          my="4"
        >
          تائید تاریخ بازی
        </Button>
      </Box>
    </BottomSheet>
  );
};

const WhereFilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <BottomSheet
      title={"کجا بازی کنیم؟"}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <Box p="4">
        <Flex alignItems={"center"} gap="2" justifyContent={"flex-start"}>
          <Checkbox color="amir.primary">
            <Text color="amir.common" fontSize={"16px"}>
              ری
            </Text>
          </Checkbox>
        </Flex>
      </Box>
    </BottomSheet>
  );
};

const TypeFilterModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const handleSetType = (type: string) => {
    navigate(`/?type=${type}`);
  };
  return (
    <BottomSheet
      title={"چی بازی کنیم؟"}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <Flex px="4" pb="4">
        <Box
          p="4"
          mx="2"
          w="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
          bg={"amir.secondaryBg"}
          borderRadius="8px"
          cursor="pointer"
          onClick={() => handleSetType("gol")}
        >
          <Image src="images/mafia.svg" />
          <Text fontSize={"16px"} fontWeight={500} color={"amir.common"}>
            مافیا
          </Text>
        </Box>
        <Box
          p="4"
          mx="2"
          w="full"
          display="flex"
          cursor="pointer"
          borderRadius="8px"
          alignItems="center"
          flexDirection="column"
          bg={"amir.secondaryBg"}
          onClick={() => handleSetType("gol")}
        >
          <Image src="images/golyapooch.svg" />
          <Text fontSize={"16px"} fontWeight={500} color={"amir.common"}>
            گل یا پوچ
          </Text>
        </Box>
      </Flex>
    </BottomSheet>
  );
};
