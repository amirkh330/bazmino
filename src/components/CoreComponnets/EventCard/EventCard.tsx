import { IEventItem } from "@/types/responses/ResponsesTypes";
import { Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Calendar } from "@phosphor-icons/react";
import { Coffee, Users } from "@phosphor-icons/react/dist/ssr";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Toman } from "@/utils/Toman/Toman";
export const EventCard = ({ event }: { event: IEventItem }) => {
  // const convertDate = () => {
  //   const date = new DateObject();
  //   date.setDate(event.dateTime);
  //   const formattedInput = event.dateTime.replace("-", " ").replace(" ", " ").trim();
  //   console.log("amir", formattedInput);
  //   var date1 = new DateObject("2020 8 21 11 55 36 100 am");

  //   console.log(date1.format("YYYY/MM/DD hh:mm:ss.SSS a"));

  //   console.log(date.format("YYYY/MM/DD"));
  //   console.log(date.format("dddd DD MMMM YYYY"));

  //   return date.format("D MMMM - HH:mm");
  // };
  // console.log(convertDate());
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
          <Flex mx="0" alignItems={"center"} gap="1">
            <Icon mx="0" as={Calendar} />

            <Text fontSize={"10px"} color="amir.secondary">
              {/* ۲۳ اسفند -۱۲:۰۰ */}
              {/* {convertDate()} */}
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
