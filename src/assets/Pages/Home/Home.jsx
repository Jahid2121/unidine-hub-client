import Banner from "../../../components/Banner/Banner";
import MemberShip from "../../../components/MemberShip/MemberShip";
import FaqSection from "../FaqSection/FaqSection";
import Testimonials from "../Testimonials/Testimonials";
import MealTabs from "./MealTabs/MealTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      
      <MealTabs />
      <Testimonials />
      <MemberShip />
      <FaqSection />
    </div>
  );
};

export default Home;