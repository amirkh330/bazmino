import { Layout } from "@/components/lib/Layout/Layout";
import Login from "@/components/Pages/Login/Login";
import { allRoutes } from "@/providers/routerProvider/allRoutes";
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
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
