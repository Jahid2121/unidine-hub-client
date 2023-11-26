import MealCard from "../MealCard/MealCard";

const MealTab = ({items}) => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        items.map(item => <MealCard key={item.id} item={item} />)
      }
    </div>
  );
};

export default MealTab;