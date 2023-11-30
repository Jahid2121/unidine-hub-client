import FlitererMeal from "../../components/FlitererMeal";
import MealCard from "../../components/MealCard/MealCard";
import MealTab from "../../components/MealTab/MealTab";
import useMeal from "../../hooks/useMeal";
import React, { useState } from 'react'
import Select from 'react-select'


const Meals = () => {
  const [meals, refetch] = useMeal();
  const [selectedCategory, setSelectedCategory] = useState(null)
  const options = [
    { value: 'breakfast', label: 'breakfast' },
    { value: 'lunch', label: 'lunch' },
    { value: 'dinner', label: 'dinner' }
  ]

  const handleCategoryChange = selectedCategory => {
    setSelectedCategory(selectedCategory)
  }
  
  return (
    <div className="z-0 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
       <div className="z-20 w-full ">
       <Select onChange={handleCategoryChange} placeholder="select a category"  options={options} />
       </div>
       <div className=" absolute   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
       {selectedCategory ? <FlitererMeal items={meals.filter(meal => meal.category === selectedCategory.value)} /> : meals.map((meal, idx) => <MealCard key={meal._id} item={meal} />)}
       </div>
    </div>
  );
};

export default Meals;