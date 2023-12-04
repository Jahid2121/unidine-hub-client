import { Rating } from "@smastrom/react-rating";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import { AiOutlineLike } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useReqMeal from "../../hooks/useReqMeal";
import { useRef, useState } from "react";
import useMemberShip from "../../hooks/useMemberShip";
import { MdFavorite } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import React from 'react';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const MealDetails = () => {
  const reviewRef = useRef()
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [, refetch] = useReqMeal();
  const [[member]] = useMemberShip()
  const [showLove, setShowLove] = useState(false)
  const {id} = useParams()

  const { isPending,  data: meal = [] } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      console.log(res.data);
      return res.data;
    },
  });

  if(isPending){
    return <span className="loading text-customGreen loading-spinner loading-lg"></span>
  }


  const {
    _id,
    title,
    category,
    image,
    ingredients,
    description,
    price,
    rating,
    postTime,
    likes,
    reviews,
    adminName,
  } = meal;


  const handleReview = (meal) => {
    if (user && user.email) {
      const review = {
        title,
        likes,
        reviews,
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

  const handleReqMeal = (meal) => {
    if(!member){
      Swal.fire({
        title: "Please Purchase a package for making meal request",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Package section!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/", { state: { from: location } });

          // setTimeout(() => {
          //   window.scrollTo({
          //     top: window.screenY + 3500,
          //     behavior: 'smooth'
          //   })
          // }, 1000);

          setTimeout(() => {
            scroller.scrollTo("membership", {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
              offset: -50,
            })
          }, 0)
        }
      });
    }
    else if (user && user.email) {
      const reqMeal = {
        title,
        image,
        category,
        price,
        likes,
        reviews,
        name: user.displayName,
        email: user.email,
        
      };
      axiosPublic.post("/requestedMeals", reqMeal).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Request sent for ${title}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } 
    else {
      Swal.fire({
        title: "Please login for making meal request",
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
  };


  const handleIncrement = () => {
    
    axiosPublic.patch(`/meal/${_id}`, { action: 'like' })
    .then(res => {
      console.log(res.data);
      setShowLove(!showLove)
    })
    .catch(error => {
      console.error(error);
  });

  }


  return (
    <>
      <div className="flex gap-4">
        <div className="w-1/2">
          <img src={image} alt="" />
          <div className="ml-8 mt-4">
            <hr />
            <h3 className="text-2xl font-medium">Meal Description:</h3>
            <p className="text-[16px]">{description}</p>
          </div>
        </div>
        <div className="w-1/2 ml-4 mt-8">
          <h3 className=" text-3xl font-bold">{title}</h3>
          <Rating
            className="mt-5 "
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
          ></Rating>
          <p className="mt-5">Post Time: {postTime}</p>
          <p className="mt-3 font-medium">Posted by: {adminName}</p>
          <p className="mt-5 font-bold text-2xl">${price}</p>
          <div className="flex items-center gap-10 ">

            {/* handling button request meal */}
            <button onClick={() => handleReqMeal(meal)}>
              <Btn title="Request Meal" /> 
            </button>

            {/* give like  */}
            { showLove ? <span className="text-2xl text-red-700 border  border-black p-2  rounded-full"><MdFavorite /> </span> :  <span onClick={handleIncrement} className="text-2xl border  border-black p-2  rounded-full">
                <AiOutlineLike color="salmon" />
              </span>}
          </div>

          <h3>Ingredients</h3>
          <p>{ingredients}</p>
        </div>
      </div>
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
          <button  onClick={() => handleReview(meal)} className="absolute bottom-0 right-0">
          <Btn title="Post Review" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MealDetails;
