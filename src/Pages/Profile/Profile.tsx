import useAuthStore from "@/store/authStore";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  Avatar,
  Box,
  chakra,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
export const Profile = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4">
        <Flex
          px="4"
          py="2"
          mx="3"
          as={Link}
          to="edit"
          borderRadius="8px"
          alignItems="center"
          bg="amir.secondaryBg"
          justifyContent="space-between"
        >
          <Flex mx="0" alignItems="center" gap="2">
            <Avatar />
            <Box>
              <Text fontWeight={600} fontSize={"16px"} color={"amir.common"}>
                نام کاربر
              </Text>
              <Text fontWeight={500} fontSize={"14px"} color={"amir.secondary"}>
                09385440212
              </Text>
            </Box>
          </Flex>
          <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
        </Flex>

        <Flex
          my="4"
          px="4"
          py="2"
          mx="0"
          as={Link}
          to="wallet"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
            کیف پول
          </Text>
          <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
        </Flex>
        <Divider color="gray.600" />

        <Flex
          my="4"
          px="4"
          py="2"
          mx="0"
          as={Link}
          to="transactions"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
            تراکنش‌ها
          </Text>
          <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
        </Flex>
        <Divider color="gray.600" />

        <Flex
          my="4"
          px="4"
          py="2"
          mx="0"
          as={Link}
          to="support"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
            ارتباط با پشتیبانی
          </Text>
          <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
        </Flex>
        <Divider color="gray.600" />

        <Flex
          px="4"
          py="2"
          my="4"
          mx="0"
          onClick={() => {
            logout();
            navigate("/");
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
            خروج از حساب کاربری
          </Text>
          <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
        </Flex>
        <Divider color="gray.600" />
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
