import { ICharacter } from "@/types/responses/ResponsesTypes";
import { chakra, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Characters = ({ characters }: { characters: ICharacter[] }) => {
  return (
    <chakra.div>
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {characters?.map((item, index) => {
          return (
            <chakra.div key={index} cursor="pointer">
              <Image
                src={item.logoUrl}
                width="152px"
                height="192px"
                borderRadius="md"
              />
              <Text fontSize="14px" fontWeight="400" color="amir.common">
                {item.title}
              </Text>
            </chakra.div>
          );
        })}
      </Grid>
    </chakra.div>
  );
};
