import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingAnimation from "../../public/Animation - 1701061503103.json"
import Lottie from "lottie-react";
const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth()

  if(loading){
    return <Lottie    animationData={loadingAnimation} />
  }
  else if(!user){
    return <Navigate to="/login" />
  }

  return children;
};

export default PrivateRoute;