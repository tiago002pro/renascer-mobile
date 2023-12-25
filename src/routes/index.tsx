import { useAuth } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import Loading from "../pages/Loading";
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

export default function Routes() {
  const {signed, loading} = useAuth();

  console.log("routes", signed);
  
  if (loading) {
    return <Loading />
  }

  return (
    signed ? <TabRoutes /> : <TabRoutes />
  );
}