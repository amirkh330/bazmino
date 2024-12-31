import { EventCard } from "@/components/CoreComponnets/EventCard/EventCard";
import { FilterSecession } from "@/components/CoreComponnets/FilterSecession/FilterSecession";
import { Box, Grid } from "@chakra-ui/react";
import React from "react";

export const Events = () => {
  return (
    <div>
      <FilterSecession />
      <Box h="66vh" overflowY="auto">
        <Grid templateColumns="repeat(2, 1fr)" >
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return <EventCard />;
            })}
        </Grid>
      </Box>
    </div>
  );
};
