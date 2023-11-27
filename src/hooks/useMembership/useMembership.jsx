

import { useQuery } from "@tanstack/react-query";

const useMembership = () => {
    const {isPending, isError, error, data: memberShipData} = useQuery({
        queryKey: ['membership'],
        queryFn: async () => {
            const res = await fetch('membership.json')
         return res.json()
        }
    })
  return {isPending, isError, error, memberShipData};
};

export default useMembership;