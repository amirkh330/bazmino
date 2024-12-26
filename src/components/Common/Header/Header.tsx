import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { MagnifyingGlass, User } from "@phosphor-icons/react";
import { Login } from "../Login/Login";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Flex justifyContent="space-between" alignItems="center">
        <InputGroup w="70%" m="0">
          <InputLeftElement pointerEvents="none">
            <MagnifyingGlass size={24} />
          </InputLeftElement>
          <Input placeholder="جستوجو" />
        </InputGroup>
        <Box onClick={onOpen} m={0}>
          <User size={24} />
        </Box>
      </Flex>
      <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </header>
  );
};
