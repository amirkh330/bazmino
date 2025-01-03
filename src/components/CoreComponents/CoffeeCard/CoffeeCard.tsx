import {
  Box,
  Flex,
  Icon,
  Image,
  Text
} from "@chakra-ui/react";
import { MapPin, Star } from "@phosphor-icons/react/dist/ssr";
export const CoffeeCard = () => {
  return (
    <Flex
      mx="0"
      p="4px"
      my="4"
      borderRadius="4px"
      gap="8px"
      bgColor="amir.secondaryBg"
    >
      <Image
        mx="0"
        borderRadius="4px"
        src="/images/coffee.png"
        w="80px"
        h="80px"
        objectFit="cover"
      />
      <Box mx="0">
        <Text fontSize={"14px"} color="amir.common" fontWeight={400}>
          کافه سالوادور
        </Text>
        <Flex gap="1" align={"center"} my="2" color="amir.secondary">
          <Icon mx="0" as={Star} />
          <Text fontSize={"12px"} fontWeight={400} mx="0">5</Text>
        </Flex>

        <Flex gap="1" align={"center"} color="amir.secondary">
          <Icon textAlign="center" mx="0" as={MapPin} />
          <Text fontSize={"12px"} fontWeight={400} mx="0">
            کافه سالوادور
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
