import Lottie from "lottie-react";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = (children) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-lg text-customSalmon"></span>
    ;
  } else if (user && isAdmin) {
    return children
  }

  return <Navigate to="/login" state={{ from: location }} replace />;;

};

export default AdminRoute;
