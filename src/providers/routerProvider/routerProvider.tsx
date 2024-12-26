import { Layout } from "@/components/Common/Layout/Layout";
import Login from "@/Pages/Login/Login";
import { allRoutes } from "@/Providers/RouterProvider/allRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter
      // future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route element={<Layout />}>
          {allRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
