import useAllReviews from "../../hooks/useAllReviews";

const AllReviews = () => {
    const [allReviews] = useAllReviews()
    console.log(allReviews);
  return (
    <div>
      <h2>  Welcome to AllReviews </h2>
    </div>
  );
};

export default AllReviews;