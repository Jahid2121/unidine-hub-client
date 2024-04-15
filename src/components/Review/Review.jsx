import { useRef } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SectionTitle from '../SectionTitle/SectionTitle';
import Btn from '../Btn';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = ({_id, title, reFetchReview}) => {
    const { user } = useAuth()
    const reviewRef = useRef()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation();
    

    const getCurrentDate = () => {
      const currentDate = new Date()
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1 
      const year = currentDate.getFullYear();
      return `${day}/${month}/${year}`

    }

  const handleReview = () => {
    if (user && user.email) {
      const review = {
        title,
        name: user.displayName,
        userImg: user.photoURL,
        email: user.email,
        review: reviewRef.current.value,
        date: getCurrentDate()
      };
      axiosPublic.post("/reviews", review).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Review success`,
            showConfirmButton: false,
            timer: 1500,
          });
          reviewRef.current.value = '';
        }
      });

      axiosPublic.patch(`/meal/${_id}`, { action: 'review' })
    .then(res => {
      console.log(res.data);
      reFetchReview()
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
            className='p-4 border'
            placeholder="Review here....."
            name="review"
            id=""
            cols="90"
            rows="7"
          ></textarea>
          <button  onClick={() => handleReview()} className="mt-4">
          <Btn title="Post Review" />
          </button>
        </div>
      </div>
        </>
    );
};

export default Review;