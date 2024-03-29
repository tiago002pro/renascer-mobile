import { useAuth } from "../contexts/auth";

import Loading from "../screens/Loading";
import StackRoutes from "./stack.routes";

export default function Routes() {
  const {signed, loading} = useAuth();

  if (loading) {
    return <Loading />
  }

  return (
    signed ? <StackRoutes /> : <StackRoutes />
  );
}