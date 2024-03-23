import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingAnimation from "../../public/Animation - 1701061503103.json"
import Lottie from "lottie-react";
import "../Routes/PrivateLoading.scss"
const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth()
  const location = useLocation();
  // console.log(location);


  if(loading){
    return ( <div className="pan-loader">
    <div className="loader"></div>
    <div className="pan-container">
      <div className="pan"></div>
      <div className="handle"></div>
    </div>
    <div className="shadow"></div>
  </div>
)
  }
  else if(!user){
    return <Navigate to="/login" state={{from: location}} replace />
  }

  return children;
};

export default PrivateRoute;