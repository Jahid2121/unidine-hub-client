import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllReqMeal = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: allReqMeals = [] } = useQuery({
      queryKey: ["allReqMeals"],
      queryFn: async () => {
        const res = await axiosSecure.get('/requestedMeals');
        return res.data;
      },
    });
  
    return [allReqMeals, refetch];
  };

export default useAllReqMeal;