import {
  Box,
  CloseButton,
  Flex,
  Slide,
  Text
} from "@chakra-ui/react";

interface IBottomSheet {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const BottomSheet = ({ title, children, isOpen, onClose }: IBottomSheet) => {
  return (
    <Box textAlign="center" p="6" maxW={"400px"}>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box bg="white" p="6" boxShadow="md" borderTopRadius="md">
          <Box height="5px" bg="gray.300" borderRadius="full" mb="4" />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb="4"
            borderBottom={"1px solid"}
            pb="4"
          >
            <Text>{title}</Text>
            <CloseButton onClick={onClose}/>
          </Flex>
          <Box>{children}</Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default BottomSheet;
