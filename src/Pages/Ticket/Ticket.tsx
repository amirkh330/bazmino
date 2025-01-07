import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Button, Divider, Image, Text, chakra } from "@chakra-ui/react";
import { ITicketItem } from "../MyTickets/MyTickets";
import { useEffect, useState } from "react";
import { CallApi } from "@/settings/axiosConfig";
import { Loading } from "@/components/CoreComponents/Loading/Loading";

export const Ticket = ({
  isOpen,
  ticketItem,
  onClose,
}: {
  isOpen: boolean;
  ticketItem: ITicketItem;
  onClose: () => void;
}) => {
  const [qr, setQr] = useState('')
  useEffect(() => {
    CallApi.get(ticketItem.ticketAddress).then(({ data }) => {
      setQr(data);
    });
  }, []);
  // handle control visiblity of bottomsheet
  return (
    <BottomSheet
      title={ticketItem.event.title}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <chakra.div px="4" h="65dvh" mx="0">
        <Text
          textAlign={"start"}
          fontSize={"14px"}
          fontWeight={400}
          color={"amir.common"}
          mb="4"
        >
          برای دریافت بارکد اختصاصی، هر یک از افراد وارد سایت جورچین شده و در
          صفحه (بازی‌های من)، شماره موبایل خود را وارد کنند.
        </Text>
        <Box
          w="full"
          p="6"
          bgColor={"amir.secondaryBg"}
          border={"1px solid"}
          borderColor={"#AFAFAF"}
          borderRadius={"8px"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={600}
            color={"amir.primary"}
            textAlign={"center"}
          >
            {ticketItem.id} - کد رزرو
          </Text>
          {qr?
          <Image src="/images/ticket.png" w="50%" />
          :
          <Loading />
          }
          <Divider my="6" borderColor={"amir.common"} variant="dashed" />
          <Button
            w="full"
            variant="outline"
            borderColor="amir.secondary"
            color="amir.secondary"
          >
            دانلود
          </Button>
        </Box>
      </chakra.div>
    </BottomSheet>
  );
};
