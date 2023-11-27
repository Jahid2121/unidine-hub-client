import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Btn from "../../components/Btn";
import { AiOutlineLike } from "react-icons/ai";

const MealDetails = () => {
    const meal = useLoaderData()
    const {_id,title,category,image,ingredients,description,price,rating,postTime,likes,reviews,adminName,adminEmail} = meal;
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
        <Btn title="Request Meal" />
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