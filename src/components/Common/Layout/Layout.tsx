import { CallApi } from "@/settings/axiosConfig";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  useEffect(() => {
    CallApi.get(`${import.meta.env.VITE_APP_BASE_URL}/me`).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Box maxWidth="400px" width="100%" bg="amir.mainBg" height="100vh">
      <Header />
      <Box mx="auto" p="4" height="85vh">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
