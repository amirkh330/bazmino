import { RouteObject } from "react-router-dom";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { Dashboard } from "@/Pages/Dashboard/Dashboard";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";

export const allRoutes: Array<RouteObject> = [
  { path: "/", element: <Dashboard /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "*", element: <NotFound /> },
];
