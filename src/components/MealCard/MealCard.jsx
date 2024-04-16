import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Btn from "../Btn";
import { Link } from "react-router-dom";
import '../MealCard/MealCard.css'
import { motion } from "framer-motion";


const MealCard = ({item}) => {
  const {_id, title, category, image, ingredients, description, price, rating, likes, reviews, adminName, adminEmail} = item;
  

  return (
    <div style={{borderRadius: '100px 0 100px 0'}}d className="card w-full md:w-80 md:max-w-xs lg:w-96 dark:bg-black dark:text-white dark:border-white dark:border dark:shadow-xl z-0 bg-base-100 shadow-xl">
    <figure>
      <img 
        
        className="md:h-64 h-48 w-full"
        src={image}
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <div className="flex text-customSalmon gap-4">
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
        <p>{rating}</p>
      </div>
      <h2 className="card-title font-bold text-3xl">{title}</h2>
      <div className="flex gap-4 md:gap-14 mt-3"> {/* Adjusted gap for smaller screens */}
        <motion.span whileHover={{scale: 1.1}}> <Link to={`/meal/${_id}`}><Btn title="View Details"></Btn></Link></motion.span>
        <p className="text-2xl font-bold text-customSalmon">${price}</p>
      </div>
    </div>
  </div>
  
  );
};

export default MealCard;
