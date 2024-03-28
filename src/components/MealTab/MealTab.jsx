import MealCard from "../MealCard/MealCard";

const MealTab = ({items}) => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 md:ml-10 gap-2 mb-2">
      {
        items.map(item => <MealCard key={item._id} item={item} />)
      }
    </div>
  );
};

export default MealTab;