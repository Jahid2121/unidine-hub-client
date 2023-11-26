import Banner from "../../../components/Banner/Banner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MealTabs from "./MealTabs/MealTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionTitle heading="Menu" subHeading="Menu category" />
      <MealTabs />
    </div>
  );
};

export default Home;