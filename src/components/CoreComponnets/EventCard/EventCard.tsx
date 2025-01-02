import { IEventItem } from "@/types/responses/ResponsesTypes";
import { Toman } from "@/utils/Toman/Toman";
import { Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Calendar } from "@phosphor-icons/react";
import { Coffee, Users } from "@phosphor-icons/react/dist/ssr";
export const EventCard = ({ event }: { event: IEventItem }) => {
  const isShowDiscount = event.basePrice !== event.finalPrice;

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
        <Image src={event.game.logoUrl} />
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
            src={event.host.logoUrl}
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
          {event.game.title}
        </Text>
        <Flex mx="0" alignItems={"center"} gap="1">
          <Icon mx="0" as={Coffee} />

          <Text fontSize={"10px"} color="amir.secondary">
            {event.host.title} - {event.host.district}
          </Text>
        </Flex>
        <Flex mx="0" alignItems={"center"} justifyContent="space-between">
          <Flex mx="0" alignItems={"center"} gap="1" flexWrap={"nowrap"}>
            <Icon mx="0" as={Calendar} />

            <Text fontSize={"10px"} color="amir.secondary">
              {event.dateTime}
            </Text>
          </Flex>
          <Flex mx="0" alignItems={"center"} gap="1">
            <Icon mx="0" as={Users} />

            <Text fontSize={"10px"} color="amir.secondary">
              نفر {event.remainingCapacity}
            </Text>
          </Flex>
        </Flex>
        <Flex mx="0" alignItems={"center"} gap="1">
          {isShowDiscount ? (
            <Text
              fontSize={"10px"}
              color="#FC8181"
              textDecoration="line-through"
            >
              {Toman(event.basePrice)}
            </Text>
          ) : null}
          <Text fontSize={"10px"} color="amir.primary">
            {Toman(event.finalPrice)}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};
