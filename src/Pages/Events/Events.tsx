import { Footer } from "@/components/Common/Footer/Footer";
import { EventCard } from "@/components/CoreComponnets/EventCard/EventCard";
import { FilterSecession } from "@/components/CoreComponnets/FilterSecession/FilterSecession";
import { Loading } from "@/components/CoreComponnets/Loading/Loading";
import {
  Box,
  chakra,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEvents } from "./Events.biz";

export const Events = () => {
  const { eventList, loading } = useEvents();
  return (
    <chakra.div>
      <chakra.div px={4}>
        <InputGroup
          w="70%"
          m="0"
          bg="transparent"
          width="full"
          my="12px"
          color="amir.common"
          alignItems="center"
          border="1px"
          borderRadius={"8px"}
          borderColor="gray.400"
        >
          <InputRightElement pointerEvents="none">
            <Icon>
              <MagnifyingGlass size={24} />
            </Icon>
          </InputRightElement>
          <Input
            placeholder="جستوجو"
            bg="transparent"
            width="full"
            // p="1"
            ps="8"
            border="none"
            _placeholder={{ color: "amir.common" }}
            _active={{
              border: "none",
              borderColor: "transparent",
            }}
            _focus={{
              border: "none",
              borderColor: "transparent",
            }}
            _hover={{
              border: "none",
              borderColor: "transparent",
            }}
            _focusVisible={{
              border: "none !important",
              borderColor: "transparent",
            }}
          />
        </InputGroup>
      </chakra.div>
      <FilterSecession />
      <Box h="58dvh" overflowY="auto" p="4">
        {loading ? (
          <Loading />
        ) : (
          <Grid templateColumns="repeat(2, 1fr)">
            {eventList.map((event) => {
              return <EventCard event={event} />;
            })}
          </Grid>
        )}
      </Box>
      <Footer />
    </chakra.div>
  );
};
