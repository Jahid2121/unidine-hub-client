

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

const useMembership = () => {
  const axiosPublic = useAxiosPublic()
    const {isPending, isError, error, data: memberShipData} = useQuery({
        queryKey: ['membership'],
        queryFn: async () => {
            const res = await axiosPublic.get('/memberships')
         return res.data
        }
    })
  return {isPending, isError, error, memberShipData};
};

export default useMembership;