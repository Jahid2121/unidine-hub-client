import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useReqMeal = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: requestedMeals = [] } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requestedMeals?email=${user?.email}`);
      return res.data;
    },
  });

  return [requestedMeals, refetch];
};

export default useReqMeal;
