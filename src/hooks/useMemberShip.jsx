import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useMemberShip = () => {
    const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const { refetch, data: member = [] } = useQuery({
    queryKey: ["member", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  return [member, refetch];
};

export default useMemberShip;


