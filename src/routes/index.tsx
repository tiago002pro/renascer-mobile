import { useAuth } from "../contexts/auth";

import Loading from "../screens/Loading";
import TabRoutes from "./tab.routes";

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