  import AnimatedNavbar from "../../../components/AnimatedNavbar/AnimatedNavbar";
  import Banner from "../../../components/Banner/Banner";
    import MemberShip from "../../../components/MemberShip/MemberShip";
  import FaqSection from "../../../components/FaqSection/FaqSection";
  import Testimonials from "../Testimonials/Testimonials";
  import MealTabs from "./MealTabs/MealTabs";
  const Home = () => {
    return (
      <div  className="dark:bg-black ">
        <Banner />
      <div className=" sticky top-0 z-50">
      <AnimatedNavbar />
      </div>
        <MealTabs />
        <Testimonials />
        <MemberShip />

        <FaqSection />
      </div>
    );
  };

  export default Home;