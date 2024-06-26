import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://uni-dine-hub-server.vercel.app",
});

// https://uni-dine-hub-server.vercel.app
// http://localhost:5000
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} = useAuth()


  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    // console.log('request stop by interceptor', token);
    config.headers.authorization = `Bearer ${token}`
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axiosSecure.interceptors.response.use(function(response){
    return response
  }, async(error)=> {
    const status = error.response.status
    console.log('status error in the interceptor', status);
    if(status === 401 || status === 403){
      await logOut()
      navigate('/login')
      // React.useEffect()
    }
    return Promise.reject(error)
  })


  return axiosSecure;
};

export default useAxiosSecure;
