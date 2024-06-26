import { Rating } from "@smastrom/react-rating";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import { AiOutlineLike } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useReqMeal from "../../hooks/useReqMeal";
import { useState } from "react";
import useMemberShip from "../../hooks/useMemberShip";
import { MdFavorite } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { animateScroll as scroller } from "react-scroll";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion } from "framer-motion";
import Review from "../../components/Review/Review";
import LoadingAnime from "../../components/LoadingAnime/LoadingAnime";
import useAllReviews from "../../hooks/useAllReviews";
import ShowReviews from "../../components/ShowReviews/ShowReviews";
const MealDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [, refetch] = useReqMeal();
  const [[member]] = useMemberShip();
  const [allReviews, reFetchReview]  = useAllReviews()
  // console.log(allReviews);
  
  // console.log(member);
  const [showLove, setShowLove] = useState(false);
  const { id } = useParams();

  const {
    isPending,
    isLoading,
    data: meal = [],
  } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal/${id}`);
      // console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingAnime />;
  }
  const mealTitle = meal.title  
  // console.log(mealTitle);
  const FliteredReviews = allReviews.filter(review => review.title === mealTitle)
  // console.log(reviewFilter);

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

  const handleReqMeal = (meal) => {
    if (!user) {
      Swal.fire({
        title: "Please login for Requesting meal",
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
    } else if (!member) {
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
    
          setTimeout(() => {
            scroller.scrollTo("membership", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
              offset: -50,
            });
          }, 2000);
        }
      });
    } else if (user && user.email) {
      const reqMeal = {
        title,
        image,
        category,
        price,
        likes,
        reviews,
        name: user.displayName,
        email: user.email,
        status: "pending"
      };
      console.log(reqMeal);
      axiosSecure.post("/requestedMeals", reqMeal).then((res) => {
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
    } else {
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
    axiosPublic
      .patch(`/meal/${_id}`, { action: "like" })
      .then((res) => {
        console.log(res.data);
        setShowLove(!showLove);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-14  bg-slate-200 mx-2 md:mx-40 mt-20 rounded-md">
        {/* Left Side Image and description row */}
        <div className="md:w-1/2 w-56">
          <img
            className="md:h-[450px] md:w-[600px] h-52 w-full rounded-xl ml-11 mt-6"
            src={image}
            alt=""
          />
          <div className="ml-8 mt-4">
            <hr />
            <h3 className="text-2xl font-medium">Meal Description:</h3>
            <p className="text-[16px] mb-7">{description}</p>
          </div>
        </div>
        {/* Right side row */}
        <div className="md:w-1/2 w-56 ml-4 mt-8">
          <h3 className=" text-2xl md:text-3xl  font-bold">{title}</h3>
          <Rating
            className="mt-5 "
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
          ></Rating>
          <p className="mt-5">Post Time: {postTime}</p>
          <p className="mt-3 font-medium">Posted by: {adminName}</p>
          <p className="mt-5 font-bold text-customSalmon text-2xl">${price}</p>
          <div className="flex items-center gap-10 ">
            {/* handling button request meal */}
            <motion.button
              whileHover={{ scale: 1 }}
              onClick={() => handleReqMeal(meal)}
            >
                <motion.span
                  style={{ borderRadius: "0 30px 30px 30px" }}
                  className=" mt-4 border text-customSalmon border-customSalmon hover:text-white hover:bg-customSalmon px-3 md:px-4 py-1 md:py-2 "
                >
                  Request Meal
                </motion.span>
            </motion.button>

            {/* give like  */}
            {showLove ? (
              <span className="text-xl md:text-2xl text-red-700 border  border-black p-2  rounded-full">
                <MdFavorite />{" "}
              </span>
            ) : (
              <span
                onClick={handleIncrement}
                className={`text-2xl border  border-black p-2 ${
                  showLove && "disabled"
                } rounded-full`}
              >
                <AiOutlineLike color="salmon" />
              </span>
            )}
          </div>

          <h3 className="text-2xl">Ingredients</h3>
          <p>{ingredients?.map((ingredient, idx) => idx !== ingredients.length - 1 ? `${ingredient} + ` : ingredient)}</p>
        </div>
      </div>
      <Review reFetchReview={reFetchReview} title={title} _id={_id} />
      {
        FliteredReviews.map(filterReview => <ShowReviews  key={filterReview._id} filterReview={filterReview} />)
      }
    </>
  );
};

export default MealDetails;
