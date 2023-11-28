import useReview from "../../hooks/useReview";

const MyReviews = () => {
  const [reviews] = useReview()
  console.log(reviews);
  return (
    <div>
      <h2>  Welcome to MyReviews </h2>
    </div>
  );
};

export default MyReviews;