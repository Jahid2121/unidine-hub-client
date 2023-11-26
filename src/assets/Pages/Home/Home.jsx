import Banner from "../../../components/Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import MealTabs from "./MealTabs/MealTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      
      <MealTabs />
      <Testimonials />
    </div>
  );
};

export default Home;