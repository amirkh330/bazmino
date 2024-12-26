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
      boxShadow="md"
    >
      <Header />
      <Outlet />
    </Box>
  );
};
