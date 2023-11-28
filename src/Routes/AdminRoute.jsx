import Lottie from "lottie-react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import loadingAnimation from "../../public/membership.json"
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const location = useLocation()

  if (loading || isPending) {
    return <Lottie animationData={loadingAnimation} />;
  } else if (!user && !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
