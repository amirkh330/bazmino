import { PaymentPreview } from "@/Pages/Payment-Preview/PaymentPreview";
import { CoffeesShops } from "@/Pages/Coffees-shops/Coffees-shops";
import { EventReserve } from "@/Pages/EventReserve/EventReserve";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";
import { Events } from "@/Pages/Events/Events";
import { RouteObject } from "react-router-dom";
import { PaymentCallBack } from "@/Pages/PaymentCallBack/PaymentCallBack";

export const allRoutes: Array<RouteObject> = [
  { path: "/events", element: <Events /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId", element: <EventDetail /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId/reserve", element: <EventReserve /> },
  { path: "/", element: <CoffeesShops /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "/payment-preview/:id", element: <PaymentPreview /> },
  { path: "/payment/callback", element: <PaymentCallBack /> },
  { path: "*", element: <NotFound /> },
];
