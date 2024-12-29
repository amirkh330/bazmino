import { CallApi } from "@/settings/axiosConfig";
import {
  Box,
  Button,
  chakra,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  VStack
} from "@chakra-ui/react";
import { Minus } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticketCount, setTicketCount] = useState(1);
  const [phoneNumbers, setPhoneNumbers] = useState<any>([]);

  const handleTicketCountChange = (value: any) => {
    const newCount = Math.max(value, 1); // Ensure at least 1 ticket
    setTicketCount(newCount);

    // Update phone numbers array to match the new ticket count
    if (newCount > phoneNumbers.length) {
      setPhoneNumbers([...phoneNumbers, ""]);
    } else {
      setPhoneNumbers(phoneNumbers.slice(0, newCount));
    }
  };

  const handlePhoneNumberChange = (index: any, value: any) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };
  console.log("phoneNumbers", phoneNumbers);

  const handleReserve = () => {
    CallApi.post("events/1005/orders", { phoneNumbers: [...phoneNumbers] })
      .then(() => {
        navigate("/checkout/1005");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <chakra.div
      display={"flex"}
      h="90vh"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box p="4">
        <VStack spacing="4">
          <Text fontSize="2xl" fontWeight="bold">
            خرید بلیط / {id}
          </Text>

          <HStack spacing="4">
            <Button
              size={"xs"}
              onClick={() => handleTicketCountChange(ticketCount - 1)}
              leftIcon={<Minus />}
              disabled={ticketCount <= 1}
            ></Button>

            <NumberInput
              size={"xs"}
              value={ticketCount}
              onChange={(valueString) =>
                handleTicketCountChange(Number(valueString))
              }
              min={1}
              max={100}
              width="120px"
            >
              <NumberInputField />
            </NumberInput>

            <Button
              size={"xs"}
              onClick={() => handleTicketCountChange(ticketCount + 1)}
              rightIcon={<Plus />}
            ></Button>
          </HStack>

          {Array.from({ length: ticketCount }).map((_, index) => (
            <Box key={index} width="100%">
              <Text>شماره تلفن بلیط {index + 1}</Text>
              <Input
                type="tel"
                value={phoneNumbers[index]}
                onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                placeholder="شماره تلفن"
              />
            </Box>
          ))}
        </VStack>
      </Box>
      <Button colorScheme="blue" width="100%" onClick={handleReserve}>
        ثبت نام
      </Button>
    </chakra.div>
  );
};
