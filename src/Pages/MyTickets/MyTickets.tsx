import { Footer } from "@/components/Common/Footer/Footer";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import { CalendarBlank, Coffee } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const MyTickets = () => {
  return (
    <chakra.div>
      {false ? (
        <chakra.div h="calc(100vh - 120px)" p="4">
          <Text fontSize={"14px"} fontWeight={400} color="amir.common">
            برای دریافت بارکد اختصاصی، هر یک از افراد وارد سایت جورچین شده و در
            صفحه (بازی‌های من)، شماره موبایل خود را وارد کنند.
          </Text>
          <Center>
            <Image
              src="/images/ticket.png"
              w="70%"
              mt="30%"
              objectFit="cover"
            />
          </Center>
        </chakra.div>
      ) : (
        <chakra.div h="calc(100vh - 120px)" p="4" mx="0">
          <Flex
            mx="0"
            p="2"
            gap="1"
            flexDirection="column"
            bgColor="amir.secondaryBg"
            borderRadius={"8px"}
          >
            <Flex mx="0" alignItems="end" justifyContent="start" gap="4" mb="2">
              <Image
                mx="0"
                borderRadius="4px"
                src="/images/cover.jpg"
                objectFit="cover"
                width="96px"
                height="104px"
              />
              <Box mx="0">
                <Text fontSize={"14px"} fontWeight={400} color="amir.common">
                  سالواردور
                </Text>
                <Text fontSize={"12px"} fontWeight={400} color="amir.secondary">
                  کافه ویونا - جردن <Icon as={Coffee} />
                </Text>
                <Text fontSize={"12px"} fontWeight={400} color="amir.secondary">
                  ۲۳ اسفند - ۱۵:۰۰ <Icon as={CalendarBlank} />
                </Text>
              </Box>
            </Flex>
            <Flex mx="0" alignItems="center" gap={2}>
              <Button
                variant="outline"
                borderColor="amir.secondary"
                color="amir.secondary"
                w="50%"
              >
                مشاهده بازی
              </Button>
              <Button bgColor="amir.primary" color="amir.secondaryBg" w="50%">
                مشاهده بلیط
              </Button>
            </Flex>
          </Flex>
        </chakra.div>
      )}
      <Footer />
    </chakra.div>
  );
};
