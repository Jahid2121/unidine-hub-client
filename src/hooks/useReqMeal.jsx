import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useReqMeal = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { refetch, data: requestedMeals = [] } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/requestedMeals?adminEmail=${user.email}`);
      return res.data;
    },
  });

  return [requestedMeals, refetch];
};

export default useReqMeal;
