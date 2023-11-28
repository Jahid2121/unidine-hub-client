import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeal = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: meals = [] } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        '/meal'
      );
      return res.data;
    },
  });

  return [meals, refetch];
};

export default useMeal;
