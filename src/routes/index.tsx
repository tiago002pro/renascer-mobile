import { useAuth } from "../contexts/auth";

import Loading from "../screens/Loading";
import StackRoutes from "./stack.routes";

export default function Routes() {
  const {signed, loading} = useAuth();

  console.log("routes", signed);
  
  if (loading) {
    return <Loading />
  }

  return (
    signed ? <StackRoutes /> : <StackRoutes />
  );
}