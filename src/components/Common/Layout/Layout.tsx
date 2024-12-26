import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <Box
      maxWidth="400px"
      width="100%"
      mx="auto"
      p="4"
      bg="gray.50"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="md"
    >
      <Box
        width="100%"
        textAlign="center"
        bg="blue.500"
        color="white"
        p="4"
        borderRadius="md"
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};
