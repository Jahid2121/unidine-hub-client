import bannerImg from "../../assets/food1.png";

const Banner = () => {
  return (
    <div className="bg-customGreen p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* banner content */}
        <div className="md:mt-20 md:ml-20 flex-grow">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 text-[#F6B76C]">
            Welcome to UniDine Hub
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Explore a variety of delicious meals tailored for students at our
            university.
          </p>
          <div className="mt-4 mb-6 md:mb-0">
            <input
              className="border rounded-xl pr-2 md:pr-4 p-2 w-full md:w-auto"
              placeholder="Search for your meal..."
              type="search"
              name=""
              id=""
            />
            <button className="p-2 rounded-xl mt-2 md:mt-0 md:ml-2 bg-[#EB8E78] text-white border-0 btn-outline">
              Search
            </button>
          </div>
        </div>

        <div className="w-full md:w-72 mt-8 md:mt-0">
          <img src={bannerImg} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
