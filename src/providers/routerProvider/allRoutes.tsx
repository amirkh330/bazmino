import { RouteObject } from "react-router-dom";
import { NotFound } from "@/components/lib/Notfound/NotFound";
import { Dashboard } from "@/components/Pages/Dashboard/Dashboard";

export const allRoutes: Array<RouteObject> = [
  { path: "/", element: <Dashboard /> },
  { path: "*", element: <NotFound /> },
];
