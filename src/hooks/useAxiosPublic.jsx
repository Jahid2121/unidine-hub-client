import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://uni-dine-hub-server.vercel.app'
})

// https://uni-dine-hub-server.vercel.app
// http://localhost:5000
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;