import { RouteObject } from "react-router-dom";
import { NotFound } from "@/components/lib/Notfound/NotFound";
import { Dashboard } from "@/components/Pages/Dashboard/Dashboard";
import { Hossein } from "@/components/Pages/Hossein/Hossein";

export const allRoutes: Array<RouteObject> = [
  { path: "/", element: <Dashboard /> },
  { path: "/hossein", element: <Hossein /> },
  { path: "*", element: <NotFound /> },
];
