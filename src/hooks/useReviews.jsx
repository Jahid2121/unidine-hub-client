import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const axiosPublic = useAxiosPublic()
   const { data: UserReviews = []} = useQuery({
    queryKey:  ["userReviews"],
    queryFn: async () => {
        const res = await axiosPublic.get("/CustomerReviews")
        return res.data;
    }
   })

    return [UserReviews];
};

export default useReviews;