import { RouteObject } from "react-router-dom";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { Dashboard } from "@/Pages/Dashboard/Dashboard";
import { Hossein } from "@/Pages/Hossein/Hossein";

export const allRoutes: Array<RouteObject> = [
  { path: "/", element: <Dashboard /> },
  { path: "/hossein", element: <Hossein /> },
  { path: "*", element: <NotFound /> },
];
