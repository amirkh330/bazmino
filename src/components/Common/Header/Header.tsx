import { Box, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { List, User } from "@phosphor-icons/react";
import { Login } from "../Login/Login";
import useAuthStore from "@/store/authStore";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth,logout } = useAuthStore();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="amir.secondaryBg"
      color="amir.common"
      p={4}
    >
      <Flex m="0" alignItems="center" gap="2" onClick={logout}>
        <Icon as={List} size={18} />
        <Text>جوریچین</Text>
      </Flex>

      {isAuth ? (
        "توشه"
      ) : (
        <Box onClick={onOpen} m={0}>
          <User size={24} />
        </Box>
      )}
      <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
};
