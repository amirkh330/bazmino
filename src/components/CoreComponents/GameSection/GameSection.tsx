import React from "react";
import {
  Box,
  chakra,
  Flex,
  Grid,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useGameSection } from "./GameSection.biz";
import { EventCard } from "../EventCard/EventCard";
import { ICoffeeShopDetail } from "@/types/responses/ResponsesTypes";
import { Loading } from "../Loading/Loading";
import { EmptyState } from "@/components/Common/EmptyState/EmptyState";

export const GameSection = (props: { coffee: ICoffeeShopDetail }) => {
  const {
    dates,
    activeDate,
    setActiveDate,
    sanseis,
    setSanseis,
    activeSans,
    setActiveSans,
    eventList,
    loadingDate,
    loadingEvent,
    loadingSans,
  } = useGameSection(props);
  return (
    <chakra.div>
      <Flex align="center" overflowX="auto" gap="4" my="4">
        {loadingDate ? (
          <Loading />
        ) : !dates.length ? (
          <EmptyState />
        ) : (
          dates?.map((item: any) => {
            return (
              <Box
                py="2"
                px="4"
                w="100px"
                key={item.id}
                textAlign="center"
                borderRadius="16px"
                border="1px solid"
                display="flex"
                alignItems="center"
                onClick={() => setActiveDate(item.id)}
                bgColor={
                  activeDate == item.id ? "amir.secondaryBg" : "transparent"
                }
                borderColor={
                  activeDate == item.id ? "amir.common" : "transparent"
                }
              >
                <Text color="amir.common" fontWeight={400} fontSize={"14px"}>
                  {item.date}
                </Text>
              </Box>
            );
          })
        )}
      </Flex>

      <Flex align="center" overflowX="auto" gap="4" my="4">
        {loadingSans ? (
          <Loading />
        ) : !sanseis.length ? (
          <EmptyState />
        ) : (
          sanseis?.map((item: any) => {
            return (
              <Box
                py="2"
                px="4"
                w={"auto"}
                display="flex"
                alignItems="center"
                key={item.id}
                textAlign="center"
                borderRadius="16px"
                border="1px solid"
                onClick={() => setActiveSans(item.id)}
                bgColor={
                  activeSans == item.id ? "amir.secondaryBg" : "transparent"
                }
                borderColor={
                  activeSans == item.id ? "amir.common" : "transparent"
                }
                color="amir.common"
                fontWeight={400}
                fontSize={"14px"}
              >
                {item.time} : سانس‌
              </Box>
            );
          })
        )}
      </Flex>
      {loadingEvent ? (
        <Loading />
      ) : !eventList.length ? (
        <chakra.div py="6">
          <EmptyState />
        </chakra.div>
      ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {eventList.map((item) => {
            return <EventCard event={item} />;
          })}
        </Grid>
      )}
    </chakra.div>
  );
};
