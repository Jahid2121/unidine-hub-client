import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: allReviews = [] } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  return [allReviews, refetch];
};

export default useAllReviews;
