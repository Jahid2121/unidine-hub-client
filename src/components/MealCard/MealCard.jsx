import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Btn from "../Btn";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import '../MealCard/MealCard.css'


const MealCard = ({item}) => {
  const {_id, title, category, image, ingredients, description, price, rating, likes, reviews, adminName, adminEmail} = item;
  

  return (
    <div style={{borderRadius: '100px 0 100px 0'}} className="card dark:bg-black dark:text-white dark:border-white dark:border dark:shadow-xl z-0  bg-base-100 shadow-xl">
      <figure>
        <img 
        style={{borderRadius: '100px 0 100px 0'}}
        className="h-64 w-96"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex text-customSalmon gap-4">
        <Rating  style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
        <p>{rating}</p>
        </div>
        <h2 className="card-title font-bold text-3xl">{title}</h2>
        <div className="flex gap-14 mt-3">
          <Tooltip className="example" id="details" />
          <span className="" data-tooltip-id="details" data-tooltip-content="Click to view Meal details"> <Link to={`/meal/${_id}`}><Btn title="View Details"></Btn></Link></span>
        <p className="text-2xl  font-bold text-customSalmon">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
