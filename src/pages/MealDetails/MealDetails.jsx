import { Rating } from "@smastrom/react-rating";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import { AiOutlineLike } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MealDetails = () => {
    const meal = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useAuth()
    const {_id,title,category,image,ingredients,description,price,rating,postTime,likes,reviews,adminName,adminEmail} = meal;

    const handleReqMeal = meal => {
        if(user){
            console.log(meal);
        }
        else{
            Swal.fire({
                title: "Please login for making meal request",
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
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
        <Rating className="mt-5 " style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
        <p className="mt-5">Post Time: {postTime}</p>
        <p className="mt-3 font-medium">Posted by: {adminName}</p>
        <p className="mt-5 font-bold text-2xl">${price}</p>
        <div className="flex items-center gap-10 ">
        <button onClick={() =>handleReqMeal(meal)}><Btn  title="Request Meal" /></button>
        <span className="text-2xl border  border-black p-2  rounded-full">
        <AiOutlineLike color="green" />
        </span>
        </div>

        <h3>Ingredients</h3>
        <p>{ingredients}</p>
      </div>
    </div>
    {/* reviews */}
    <div>
    <SectionTitle heading="reviews" subHeading="From Our member about this meal" />
    </div>
    </>
  );
};

export default MealDetails;