import { CallApi } from "@/settings/axiosConfig";
import { Box, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import useAuthStore from "@/store/authStore";

export const Layout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    CallApi.get(`/me`)
      .then((res) => {})
      .catch(({ status }) => {
        if (status == 401) {
          logout();
          navigate("/");
          toast({
            description: "لطفا وارد شوید",
            status: "info",
            duration: 2000,
            position:"top"
          });
        }
      });
  }, []);
  return (
    <Box maxWidth="400px" width="100%" bg="amir.mainBg" height="100dvh">
      <Header />
      {/* <Box mx="auto" height="calc(100dvh - 56px)"> */}
      <Outlet />
      {/* </Box> */}
    </Box>
  );
};
