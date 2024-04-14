import { useState } from "react";
import bannerImg from "../../assets/food1.png";
import {motion} from "framer-motion"
import useMeal from "../../hooks/useMeal";
import { Link, redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Banner = () => {
  const [query, setQuery] = useState("")
  // console.log(query);
  const [suggestions, setSuggestions] = useState([])
  const [meals] = useMeal()
  const navigate = useNavigate()
  const handleSearch = () => {
    const searchResult = meals.filter( 
      (meal) => meal.title.toLowerCase() == query.toLowerCase()
    )
    const mealId = searchResult?.map(meal => meal._id )
    if(typeof mealId[0] == "undefined"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please search with the full name of the meal"
        });
    }

    // if(mealId)
    else if(mealId) {
      navigate(`/meal/${mealId[0]}`) 

    }
    else {
      alert("no match found")
    }
  }


  const handleInputChange = e => {
    setQuery(e.target.value)
    // console.log(query);
    

    // filtering suggestions based on query
    const newSuggestions = meals.filter(meal => meal.title.toLowerCase().includes(query.toLowerCase()) || meal.category.toLowerCase().includes(query.toLowerCase())  )
    setSuggestions(newSuggestions);
  }

  const handleSuggestionOnClick = suggestions => {

  }
  


  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3 } },
  };
  return (
    <div className="bg-customGreen p-4 md:p-8 h-[520px] md:h-[500px] ">
      <div className="flex flex-col md:flex-row gap-0 md:gap-8">
        {/* banner content */}
        <motion.div variants={variants} initial="initial" animate="animate" className="md:mt-20 md:ml-20 flex-grow">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 text-[#F6B76C]">
            Welcome to UniDine Hub
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Explore a variety of delicious meals tailored <br /> for students at our
            university.
          </p>
          <div className="mt-4 mb-6 md:mb-0">
            <input
              className="border rounded-xl pr-2 md:pr-4 p-2 w-80 md:w-auto"
              placeholder="e.g- scrambled eggs"
              type="search"
              value={query}
              onChange={handleInputChange}
            />
            <motion.button whileHover={{scale: 1.1}}
            onClick={handleSearch}
            className="p-2 rounded-xl mt-2 md:mt-0 md:ml-2 bg-[#EB8E78] hover:bg-customSalmon text-white border-0 btn-outline">
              Search
            </motion.button>
          </div>
          {
            suggestions.length > 0 && (
              <div className="absolute bg-white mt-2 w-80 border border-gray-200 rounded-md">
                  {
                    suggestions.map(suggestion => <p 
                      className="p-2 cursor-pointer hover:bg-gray-100"
                    key={suggestion._id}>
                      <Link to={`/meal/${suggestion._id}`} 
                      onClick={() => handleSuggestionOnClick(suggestion)}
                      >{suggestion.title}</Link>
                    </p>)
                  }
              </div>
            )
          }
        </motion.div>
      
        <div className=" md:w-80 w-60 ml-20">
          <img src={bannerImg} alt="" className=" h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;