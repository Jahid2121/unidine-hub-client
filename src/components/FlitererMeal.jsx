import MealCard from "./MealCard/MealCard";

const FlitererMeal = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 absolute gap-6">
      {
        items.map(item => <MealCard key={item._id} item={item} />)
      }
    </div>
  );
};

export default FlitererMeal;