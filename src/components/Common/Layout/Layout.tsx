import { CallApi } from "@/Settings/axiosConfig";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  useEffect(()=>{
    CallApi.get("/me").then((res) => {
      console.log(res.data);
    })
  },[])
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
