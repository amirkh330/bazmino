import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import {
  Box,
  Button,
  Divider,
  Image,
  Text,
  chakra
} from "@chakra-ui/react";

export const Ticket = ({isOpen, onOpen, onClose}:{isOpen: boolean, onOpen: () => void, onClose: () => void}) => {
  // handle control visiblity of bottomsheet
  return (
    <BottomSheet
      title={"مافیا"}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <chakra.div px="4" h="45dvh" mx="0">
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
            کد رزرو ۲۰۲۱۳
          </Text>
          <Image src="/images/ticket.png" w="50%" />
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
