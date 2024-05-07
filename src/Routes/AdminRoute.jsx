import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  const location = useLocation()

  if (loading || isAdminLoading) {
    // return <span className="loading loading-spinner loading-lg text-customSalmon"></span>
    
  } else if (!user && !isAdmin) {
    return  <Navigate to="/login" state={{ from: location }} replace />
  }
  else if (user && !isAdmin) {
    return <Navigate to="/dashboard/profile" replace />
  }

  return children ;

};

export default AdminRoute;
