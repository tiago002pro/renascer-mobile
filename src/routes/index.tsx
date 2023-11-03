import { useAuth } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import Loading from "../pages/Loading";
import TabRoutes from "./tab.routes";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
  const {signed, loading} = useAuth();

  if (loading) {
    return <Loading />
  }

  return (
    signed ? <DrawerRoutes /> : <AuthRoutes />
  );
}