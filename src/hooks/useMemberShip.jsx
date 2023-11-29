import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMemberShip = () => {
    const axiosSecure = useAxiosSecure();
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


