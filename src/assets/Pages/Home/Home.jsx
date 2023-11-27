import Banner from "../../../components/Banner/Banner";
import FaqSection from "../FaqSection/FaqSection";
import Testimonials from "../Testimonials/Testimonials";
import MealTabs from "./MealTabs/MealTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      
      <MealTabs />
      <Testimonials />
      <FaqSection />
    </div>
  );
};

export default Home;