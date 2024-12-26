import { Box, CloseButton, Flex, Slide, Text } from "@chakra-ui/react";

interface IBottomSheet {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const BottomSheet = ({ title, children, isOpen, onClose }: IBottomSheet) => {
  if (!isOpen) return null;
  return (
    <>
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
              <CloseButton onClick={onClose} />
            </Flex>
            <Box>{children}</Box>
          </Box>
        </Slide>
      </Box>
      <Box
        onClick={onClose}
        position="fixed"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bg="blackAlpha.600"
        backdropFilter="blur(10px)"
      ></Box>
    </>
  );
};

export default BottomSheet;
