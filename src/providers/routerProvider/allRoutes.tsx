import { PaymentPreview } from "@/Pages/Payment-Preview/PaymentPreview";
import { CoffeesShops } from "@/Pages/Coffees-shops/Coffees-shops";
import { EventReserve } from "@/Pages/EventReserve/EventReserve";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { EventDetail } from "@/Pages/EventDetail/EventDetail";
import { Events } from "@/Pages/Events/Events";
import { Navigate, RouteObject } from "react-router-dom";
import { PaymentCallBack } from "@/Pages/PaymentCallBack/PaymentCallBack";
import { MyTickets } from "@/Pages/MyTickets/MyTickets";
import { Profile } from "@/Pages/Profile/Profile";
import { Wallet } from "@/Pages/Wallet/Wallet";
import { EditProfile } from "@/Pages/EditProfile/EditProfile";
import { Transactions } from "@/Pages/Transactions/Transactions";
import { PaymentFailed } from "@/Pages/Payment-Failed/PaymentFailed";
import { PaymentSuccess } from "@/Pages/Payment-Success/PaymentSuccess";
import { CoffeeShopDetail } from "@/Pages/CoffeeShopDetail/CoffeeShopDetail";
import useAuthStore from "@/store/authStore";
import { Host } from "@/Pages/Host/Host";

const PrivateRoute = ({
  element,
  isHost = false,
}: {
  element: JSX.Element;
  isHost?: boolean;
}) => {
  const { isAuth,isHost:isHostStore } = useAuthStore();
  if(isHost) {return isAuth && isHostStore ? element : <Navigate to="/" replace />}
  else return isAuth ? element : <Navigate to="/" replace />;
};

export const allRoutes: Array<RouteObject> = [
  { path: "/host", element: <PrivateRoute element={<Host />} isHost/> },
  { path: "/profile", element: <PrivateRoute element={<Profile />} /> },
  {
    path: "/profile/transactions",
    element: <PrivateRoute element={<Transactions />} />,
  },
  { path: "/profile/wallet", element: <PrivateRoute element={<Wallet />} /> },
  {
    path: "/profile/edit",
    element: <PrivateRoute element={<EditProfile />} />,
  },
  {
    path: "events/:eventId/dates/:dateId/times/:timeId/reserve",
    element: <PrivateRoute element={<EventReserve />} />,
  },
  { path: "/my-tickets", element: <PrivateRoute element={<MyTickets />} /> },
  {
    path: "/payment-preview/:id",
    element: <PrivateRoute element={<PaymentPreview />} />,
  },
  {
    path: "/payment/callback",
    element: <PrivateRoute element={<PaymentCallBack />} />,
  },
  {
    path: "/payment/success",
    element: <PrivateRoute element={<PaymentCallBack />} />,
  },
  {
    path: "/payment/failed",
    element: <PrivateRoute element={<PaymentFailed />} />,
  },

  { path: "/events", element: <Events /> },
  {
    path: "events/:eventId/dates/:dateId/times/:timeId",
    element: <EventDetail />,
  },
  { path: "/coffees", element: <CoffeesShops /> },
  { path: "/coffees/:id", element: <CoffeeShopDetail /> },
  { path: "/event-detail/:id", element: <EventDetail /> },
  { path: "*", element: <NotFound /> },
];
