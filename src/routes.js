import {
  ADMIN_ROUTE,
  BUSKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Busket from "./pages/Busket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
  { path: ADMIN_ROUTE, Component: Admin },
  { path: BUSKET_ROUTE, Component: Busket },
];
export const publicRoutes = [
  { path: SHOP_ROUTE, Component: Shop },
  { path: LOGIN_ROUTE, Component: Auth },
  { path: REGISTRATION_ROUTE, Component: Auth },
  { path: DEVICE_ROUTE + `/:id`, Component: DevicePage },
];