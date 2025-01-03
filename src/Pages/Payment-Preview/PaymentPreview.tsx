import { CallApi } from "@/settings/axiosConfig";
import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { CheckCircle } from "@phosphor-icons/react";
import { Cardholder } from "@phosphor-icons/react/dist/ssr";
import { useParams } from "react-router-dom";
export const PaymentPreview = () => {
  const { id } = useParams();

  const handlePayment = () => {
    CallApi.post(`/orders/${id}/payments`).then(({ data }) => {
      window.location.href = data;
    });
  };
  return (
    <chakra.div>
      <chakra.div h="calc(100vh - 110px)">
        <Flex flexDirection="column" mx="0" px="4" gap="24px" pt="8px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            جزئیات رزرو بازی
          </Text>
          <Flex mx="0" alignItems="center" justifyContent="space-between">
            <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
              هزینه رزرو (۴ نفر)
            </Text>
            <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
              ۶۲۹.۰۰۰ تومان
            </Text>
          </Flex>
          <Flex mx="0" alignItems="center" justifyContent="space-between">
            <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
              تخفیف{" "}
            </Text>
            <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
              ۶۲۹.۰۰۰ تومان
            </Text>
          </Flex>
        </Flex>
        <Divider color="gray.600" my="24px" />
        <Flex flexDirection="column" mx="0" px="4" gap="24px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            کد تخفیف
          </Text>
          <Flex
            mx="0"
            alignItems="center"
            justifyContent="space-between"
            gap="2"
          >
            <Input color="amir.common" />
            <Button
              variant={"outline"}
              borderColor={"amir.primary"}
              color={"amir.primary"}
            >
              اعمال کد
            </Button>
          </Flex>
        </Flex>
        <Divider color="gray.600" my="24px" />
        <Flex flexDirection="column" mx="0" px="4" gap="24px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            انتخاب روش پرداخت
          </Text>

          <Flex
            borderRadius="8px"
            border="1px solid"
            borderColor={"amir.primary"}
            background="amir.secondaryBg"
            px="16px"
            py="16px"
            mx="0"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center" mx="0" gap="2">
              <Icon
                as={Cardholder}
                mx="0"
                w="6"
                h="6"
                p="1"
                bgColor={"amir.common"}
                borderRadius={"50%"}
              />
              <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
                پرداخت مستقیم از درگاه
              </Text>
            </Flex>
            <Icon
              as={CheckCircle}
              mx="0"
              color={"amir.primary"}
              weight="fill"
            />
          </Flex>
        </Flex>
      </chakra.div>
      <chakra.div px="4">
        <Button
          width={"100%"}
          variant={"solid"}
          bgColor="amir.primary"
          color="amir.secondaryBg"
          onClick={handlePayment}
        >
          پرداخت
        </Button>
      </chakra.div>
    </chakra.div>
  );
};
