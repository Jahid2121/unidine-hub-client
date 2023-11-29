import { Rating } from "@smastrom/react-rating";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import { AiOutlineLike } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useReqMeal from "../../hooks/useReqMeal";
import { useRef } from "react";
import useMemberShip from "../../hooks/useMemberShip";

const MealDetails = () => {
  const reviewRef = useRef()
  const meal = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useReqMeal();
  const [[member]] = useMemberShip()
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
    adminEmail,
  } = meal;

  const handleShowWarning =() => {
    console.log('no access');
  }
  
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
      axiosSecure.post("/reviews", review).then((res) => {
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
    if (user && user.email) {
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
      axiosSecure.post("/requestedMeals", reqMeal).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
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
    axiosSecure.patch(`/meal/${_id}`)
    .then(res => {
      console.log(res.data);
    })

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
            {member ?  <button onClick={() => handleReqMeal(meal)}>
              <Btn title="Request Meal" /> 
            </button> :  <button  onClick={handleShowWarning}>
              <Btn title="Request Meal" />
            </button>}
            <span onClick={handleIncrement} className="text-2xl border  border-black p-2  rounded-full">
              <AiOutlineLike color="salmon" />
            </span>
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
