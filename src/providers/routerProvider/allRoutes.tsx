import { NotFound } from "@/components/Common/Notfound/NotFound";
import { CoffeesShops } from "@/Pages/Coffees-shops/Coffees-shops";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";
import { EventReserve } from "@/Pages/EventReserve/EventReserve";
import { Events } from "@/Pages/Events/Events";
import { Reserves } from "@/Pages/Reserves/Reserves";
import { RouteObject } from "react-router-dom";

export const allRoutes: Array<RouteObject> = [
  // { path: "/", element: <Dashboard /> },
  { path: "/events", element: <Events /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId", element: <EventDetail /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId/reserve", element: <EventReserve /> },
  { path: "/", element: <CoffeesShops /> },
  { path: "/reserves", element: <Reserves /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "*", element: <NotFound /> },
];
