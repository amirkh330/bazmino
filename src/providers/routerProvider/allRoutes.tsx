import { NotFound } from "@/components/Common/Notfound/NotFound";
import { CoffeesShops } from "@/Pages/Coffees-shops/Coffees-shops";
import { Dashboard } from "@/Pages/Dashboard/Dashboard";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";
import { Events } from "@/Pages/Events/Events";
import { Reserves } from "@/Pages/Reserves/Reserves";
import { RouteObject } from "react-router-dom";

export const allRoutes: Array<RouteObject> = [
  { path: "/", element: <Dashboard /> },
  { path: "/events", element: <Events /> },
  { path: "/coffee-shops", element: <CoffeesShops /> },
  { path: "/reserves", element: <Reserves /> },
  { path: "/", element: <Dashboard /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "*", element: <NotFound /> },
];
