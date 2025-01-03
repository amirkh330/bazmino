import { Loading } from "@/components/CoreComponents/Loading/Loading";
import Map from "@/components/CoreComponents/Map/Map";
import { Toman } from "@/utils/Toman/Toman";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  chakra
} from "@chakra-ui/react";
import {
  Calendar,
  Coffee,
  MapPin,
  ShareNetwork
} from "@phosphor-icons/react";
import { useEventDetail } from "../EventDetail/EventDetail.biz";

export const PaymentCallBack = () => {
  const { loading, eventItem, handleShare } = useEventDetail();
  return (
    <>
      {loading && !eventItem ? (
        <Loading />
      ) : (
        <chakra.div
          display={"flex"}
          mx="0"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            p={2}
            w={"full"}
            fontSize={16}
            fontWeight={600}
            bgColor={"green.500"}
            color="amir.common"
            justifyContent="center"
          >
            خرید شما با موفقیت انجام شد.
          </Flex>
          <chakra.div
            mx="0"
            display={"flex"}
            h="calc(100dvh - 150px)"
            overflow={"auto"}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box p="4">
              <Image
                src={eventItem?.game.logoUrl}
                maxH={"380px"}
                w={"full"}
                objectFit={"cover"}
              />
            </Box>
            <Box mx="0" gap="4px" display="flex" flexDirection="column" p="4">
              <Flex
                mx="0"
                alignItems={"center"}
                mb="4"
                justifyContent="space-between"
              >
                <Text fontSize={"20px"} fontWeight={600} color="amir.common">
                  {eventItem?.game.title}
                </Text>

                <Icon
                  mx="0"
                  as={ShareNetwork}
                  onClick={handleShare}
                  color={"amir.primary"}
                />
              </Flex>
              <Flex
                mx="0"
                my="2"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Flex mx="0" alignItems="center" gap="1">
                  <Icon mx="0" as={Coffee} color={"amir.secondary"} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={500}
                    color="amir.secondary"
                  >
                    برگذارکننده:
                  </Text>
                </Flex>
                <Text fontSize={"16px"} fontWeight={500} color="amir.secondary">
                  {eventItem?.host.title} - {eventItem?.host.districtTitle}
                </Text>
              </Flex>
              <Flex
                mx="0"
                my="2"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Flex mx="0" alignItems="center" gap="1">
                  <Icon mx="0" as={Calendar} color={"amir.secondary"} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={500}
                    color="amir.secondary"
                  >
                    سانس بازی:
                  </Text>
                </Flex>
                <Text fontSize={"16px"} fontWeight={500} color="amir.secondary">
                  {eventItem?.dateTime}
                </Text>
              </Flex>
            </Box>
            <Divider color="gray.600" />

            <Box mx="0" p="4">
              <Flex mx="0" alignItems="center" gap="1">
                <Icon mx="0" as={MapPin} color={"amir.secondary"} />
                <Text fontWeight={500} fontSize={"16px"} color="amir.secondary">
                  آدرس:
                </Text>
              </Flex>
              <Text
                mt="2"
                mb="4"
                fontSize={"14px"}
                fontWeight={500}
                color="amir.secondary"
              >
                {eventItem?.host.address}
              </Text>

              <Map lat={35.6892} lng={51.389} />
            </Box>
            <Divider color="gray.600" />
            <Box mx="0" p="4">
              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={400} fontSize={"14px"} color="amir.common">
                  مبلغ خرید
                </Text>
                <Text fontWeight={400} fontSize={"16px"} color="amir.common">
                  {Toman(400000)}
                </Text>
              </Flex>

              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={400} fontSize={"14px"} color="amir.common">
                  تاریخ خرید
                </Text>
                <Text fontWeight={400} fontSize={"16px"} color="amir.common">
                  ۱۳۷۳/۱۰/۱۲
                </Text>
              </Flex>

              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={400} fontSize={"14px"} color="amir.common">
                  ساعت خرید
                </Text>
                <Text fontWeight={400} fontSize={"16px"} color="amir.common">
                  ۱۲:۳۰
                </Text>
              </Flex>

              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={600} fontSize={"16px"} color="amir.common">
                  کد رهگیری
                </Text>
                <Text fontWeight={600} fontSize={"16px"} color="amir.common">
                  ۱۲۳۱۲۳۱۳۲
                </Text>
              </Flex>
            </Box>
          </chakra.div>
          <Flex
            py={2}
            px={4}
            mx="0"
            zIndex={10}
            justifyContent="space-center"
            alignItems="center"
            gap={2}
          >
            <Button
              w="100%"
              borderRadius="6px"
              bgColor="amir.primary"
              color="amir.secondaryBg"
              onClick={() => {}}
            >
              مشاهده بلیط رزرو
            </Button>
          </Flex>
        </chakra.div>
      )}
    </>
  );
};
