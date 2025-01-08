import { PaymentPreview } from "@/Pages/Payment-Preview/PaymentPreview";
import { CoffeesShops } from "@/Pages/Coffees-shops/Coffees-shops";
import { EventReserve } from "@/Pages/EventReserve/EventReserve";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";
import { Events } from "@/Pages/Events/Events";
import { RouteObject } from "react-router-dom";
import { PaymentCallBack } from "@/Pages/PaymentCallBack/PaymentCallBack";
import { MyTickets } from "@/Pages/MyTickets/MyTickets";
import { Profile } from "@/Pages/Profile/Profile";
import { Wallet } from "@/Pages/Wallet/Wallet";
import { EditProfile } from "@/Pages/EditProfile/EditProfile";
import { Transactions } from "@/Pages/Transactions/Transactions";
import { PaymentFailed } from "@/Pages/Payment-Failed/PaymentFailed";
import { PaymentSuccess } from "@/Pages/Payment-Success/PaymentSuccess";

export const allRoutes: Array<RouteObject> = [
  { path: "/profile", element: <Profile /> },
  { path: "/profile/transactions", element: <Transactions /> },
  { path: "/profile/wallet", element: <Wallet /> },
  { path: "/profile/edit", element: <EditProfile /> },
  { path: "/events", element: <Events /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId", element: <EventDetail /> },
  { path: "events/:eventId/dates/:dateId/times/:timeId/reserve", element: <EventReserve /> },
  { path: "/coffees", element: <CoffeesShops /> },
  { path: "/coffees/:id", element: <CoffeesShops /> },
  { path: "/my-tickets", element: <MyTickets /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "/payment-preview/:id", element: <PaymentPreview /> },
  { path: "/payment/callback", element: <PaymentCallBack /> },
  { path: "/payment/success", element: <PaymentCallBack /> },
  { path: "/payment/failed", element: <PaymentFailed /> },
  { path: "*", element: <NotFound /> },
];
