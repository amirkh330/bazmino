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
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarBlank, Coffee } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import { Ticket } from "../Ticket/Ticket";
import { CallApi } from "@/settings/axiosConfig";
import { Loading } from "@/components/CoreComponents/Loading/Loading";

export interface IEventItem {
  id: number;
  status: string;
  event: IReserveItem;
}

export interface IReserveItem {
  title: string;
  dateTime: string;
  logoUrl: string;
  host: Host;
}

export interface Host {
  title: string;
  districtTitle: string;
}

export const MyTickets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reserveList, setReserveList] = useState<IEventItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    CallApi.get("/me/reservations")
      .then(({ data }) => {
        console.log("data:", data);
        setReserveList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <chakra.div>
      {loading ? (
        <Loading />
      ) : !reserveList.length ? (
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
          {reserveList.map((item, index) => {
            return (
              <Flex
                key={item.event.title}
                mx="0"
                p="2"
                gap="1"
                flexDirection="column"
                bgColor="amir.secondaryBg"
                borderRadius={"8px"}
              >
                <Flex
                  mx="0"
                  alignItems="end"
                  justifyContent="start"
                  gap="4"
                  mb="2"
                >
                  <Image
                    mx="0"
                    borderRadius="4px"
                    src={item.event.logoUrl}
                    objectFit="cover"
                    width="96px"
                    height="104px"
                  />
                  <Box mx="0">
                    <Text
                      fontSize={"14px"}
                      fontWeight={400}
                      color="amir.common"
                    >
                      {item.event.title}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      fontWeight={400}
                      color="amir.secondary"
                    >
                      {item.event.host?.title} - {item.event.host?.districtTitle}{" "}
                      <Icon as={Coffee} />
                    </Text>
                    <Text
                      fontSize={"12px"}
                      fontWeight={400}
                      color="amir.secondary"
                    >
                      {item.event.dateTime} <Icon as={CalendarBlank} />
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
                  <Button
                    bgColor="amir.primary"
                    color="amir.secondaryBg"
                    w="50%"
                    onClick={onOpen}
                  >
                    مشاهده بلیط
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </chakra.div>
      )}
      <Ticket isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Footer />
    </chakra.div>
  );
};
