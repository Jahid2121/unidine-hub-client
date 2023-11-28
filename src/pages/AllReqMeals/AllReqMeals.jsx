import useAllReqMeal from "../../hooks/useAllReqMeal";

const AllReqMeals = () => {
    const [allReqMeals] = useAllReqMeal()
    console.log(allReqMeals);
  return (
    <div>
      <h2>  Welcome to AllReqMeals </h2>
    </div>
  );
};

export default AllReqMeals;