import { CallApi } from "@/settings/axiosConfig";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  useEffect(() => {
    CallApi.get(`/me`).then((res) => {
    });
  }, []);
  return (
    <Box maxWidth="400px" width="100%" bg="amir.mainBg" height="100dvh">
      <Header />
      <Box mx="auto" height="calc(100dvh - 56px)">
        <Outlet />
      </Box>
    </Box>
  );
};
