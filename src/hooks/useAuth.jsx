import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext)
};

export default useAuth;