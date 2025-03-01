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
import { Link } from "react-router-dom";

export interface ITicketItem {
  id: number;
  eventId: number,
  dateId: number,
  timeId: number,
  status: string;
  event: IReserveItem;
  ticketAddress: string;
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
  const [reserveList, setReserveList] = useState<ITicketItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTicket, setActiveTicket] = useState<ITicketItem>();

  useEffect(() => {
    CallApi.get("/me/reservations")
      .then(({ data }) => {
        setReserveList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderStatus = (status: string) => {
    switch (status) {
      case "Ready":
        return "";
      case "Canceled":
        return <chakra.div bg="red.200" color="red.700">لغو شده</chakra.div>;
      case "PENDING":
        return <chakra.div bg="">در انتظار</chakra.div>;
      default:
        return "";
    }
  };
  return (
    <chakra.div
      display="flex"
      h="calc(100vh - 58px)"
      flexDirection="column"
      justifyContent="space-between"
    >
      {loading ? (
        <Loading />
      ) : !reserveList.length ? (
        <chakra.div p="4">
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
        <chakra.div px="4" mx="0" overflow={"auto"}>
          {reserveList.map((item) => {
            return (
              <Flex
                key={item.event.title}
                mx="0"
                my="4"
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
                    {/* {renderStatus(item.status)} */}
                    {/* //  implement Status for ticket // haj amir */}
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
                      {item.event.host?.title} -{" "}
                      {item.event.host?.districtTitle} <Icon as={Coffee} />
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
                    as={Link}
                    to={`/events/${item.eventId}/dates/${item.dateId}/times/${item.timeId}`}
                    w="50%"
                  >
                    مشاهده بازی
                  </Button>
                  <Button
                    bgColor="amir.primary"
                    color="amir.secondaryBg"
                    w="50%"
                    onClick={() => {
                      onOpen();
                      setActiveTicket(item);
                    }}
                  >
                    مشاهده بلیط
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </chakra.div>
      )}
      {isOpen && (
        <Ticket
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setActiveTicket(undefined);
          }}
          ticketItem={activeTicket!}
        />
      )}
      <Footer />
    </chakra.div>
  );
};
