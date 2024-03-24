import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SectionTitle from '../SectionTitle/SectionTitle';
import Btn from '../Btn';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = ({_id, refetch, title}) => {
    const { user } = useAuth()
    const reviewRef = useRef()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation();
  const handleReview = () => {
    if (user && user.email) {
      const review = {
        title,
        name: user.displayName,
        email: user.email,
        review: reviewRef.current.value
      };
      axiosPublic.post("/reviews", review).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Review success`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });

      axiosPublic.patch(`/meal/${_id}`, { action: 'review' })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));


      
    }
    else {
      Swal.fire({
        title: "Please login for review",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
}
    return (
        <>
            {/* reviews */}
      <div>
        <SectionTitle heading="review" subHeading="write your review" />
        <div className="flex flex-col w-11/12  mx-auto">
          <textarea
            ref={reviewRef}
            placeholder="Review here....."
            name="review"
            id=""
            cols="90"
            rows="7"
          ></textarea>
          <button  onClick={() => handleReview()} className="absolute bottom-0 right-0">
          <Btn title="Post Review" />
          </button>
        </div>
      </div>
        </>
    );
};

export default Review;