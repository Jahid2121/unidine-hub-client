import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useLoggedInUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const { refetch, data: logUser = [] } = useQuery({
      queryKey: ["logUser"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/${user?.email}`);
        return res.data;
      },
    });
  
    return [logUser, refetch];
};

export default useLoggedInUser;