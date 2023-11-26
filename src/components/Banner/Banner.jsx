import bannerImg from "../../assets/food1.png"
const Banner = () => {
  return (
    <div className="bg-[#5EAE53]">
      <div  className=" flex gap-28">

        {/* banner content */}
        <div className="mt-20 ml-20">
        <h2 className="text-3xl font-light mb-3   text-[#F6B76C]">Welcome to UniDine Hub</h2>
      <p className="text-4xl">Explore a variety of delicious <br /> meals tailored for <br /> students at our university.</p>
      <div className="mt-5  mb-6 ">
      <input className="border rounded-xl  pr-16 p-2" placeholder="Search for your meal..." type="search" name="" id="" />
      <button className=" p-2 rounded-xl absolute   -ml-16 bg-[#EB8E78] text-white border-0 btn-outline">Search</button>
      </div>
        </div>
        <div className="w-72 mt-16">
        <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;