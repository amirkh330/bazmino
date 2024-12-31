import { Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Calendar } from "@phosphor-icons/react";
import { Coffee, Users } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export const EventCard = () => {
  return (
    <Card
      bg="amir.secondaryBg"
      color="amir.common"
      borderRadius="4px"
      mx="6px"
      overflow={"hidden"}
      my="12px"
    >
      <Box>
        <Image src="images/cover.jpg" />
        <Box
          borderRadius="50%"
          w="40px"
          h="40px"
          overflow={"hidden"}
          mx="0"
          position="relative"
          top="-30px"
          right="10px"
        >
          <Image
            src="images/icon.jpg"
            w="40px"
            h="40px"
            objectFit={"cover"}
            overflow={"hidden"}
            mx="0"
          />
        </Box>
      </Box>
      <Box mx="0" gap="6px" p="1" display="flex" flexDirection="column">
        <Text fontSize={"14px"} color="amir.common">
          عنوان بازی
        </Text>
        <Flex mx="0" alignItems={"center"} gap="1">
          <Icon mx="0" as={Coffee} />

          <Text fontSize={"10px"} color="amir.secondary">
            مافیا - لمیز
          </Text>
        </Flex>
        <Flex mx="0" alignItems={"center"} justifyContent="space-between">
          <Flex mx="0" alignItems={"center"} gap="1">
            <Icon mx="0" as={Calendar} />

            <Text fontSize={"10px"} color="amir.secondary">
              ۲۳ اسفند -۱۲:۰۰
            </Text>
          </Flex>
          <Flex mx="0" alignItems={"center"} gap="1">
            <Icon mx="0" as={Users} />

            <Text fontSize={"10px"} color="amir.secondary">
              ۳ نفر
            </Text>
          </Flex>
        </Flex>
        <Text fontSize={"10px"} color="amir.primary">
          ۱۳۰.۰۰۰ تومان
        </Text>
      </Box>
    </Card>
  );
};
