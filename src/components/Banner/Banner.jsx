import bannerImg from "../../assets/food1.png";
import {motion} from "framer-motion"
const Banner = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3 } },
  };
  return (
    <div className="bg-customGreen p-4 md:p-8 h-[520px] md:h-[500px] ">
      <div className="flex flex-col md:flex-row gap-0 md:gap-8">
        {/* banner content */}
        <motion.div variants={variants} initial="initial" animate="animate" className="md:mt-20 md:ml-20 flex-grow">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 text-[#F6B76C]">
            Welcome to UniDine Hub
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Explore a variety of delicious meals tailored <br /> for students at our
            university.
          </p>
          <div className="mt-4 mb-6 md:mb-0">
            <input
              className="border rounded-xl pr-2 md:pr-4 p-2 w-80 md:w-auto"
              placeholder="Search for your meal..."
              type="search"
              name=""
              id=""
            />
            <motion.button whileHover={{scale: 1.1}} className="p-2 rounded-xl mt-2 md:mt-0 md:ml-2 bg-[#EB8E78] hover:bg-customSalmon text-white border-0 btn-outline">
              Search
            </motion.button>
          </div>
        </motion.div>
      
        <div className=" md:w-80 w-60 ml-20">
          <img src={bannerImg} alt="" className=" h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;