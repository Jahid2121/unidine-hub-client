import bannerImg from "../../assets/food1.png"
const Banner = () => {
  return (
    <div>
      <h2 >  Welcome to Banner </h2>
      <div  className="mt-16 flex">

        {/* banner content */}
        <div>
        <h2 className="text-3xl">Welcome to UniDine Hub</h2>
      <p>Explore a variety of delicious meals tailored for students at our university.</p>
      <div>
      <input className="border p-3" type="search" name="" id="" />
      <button className="btn btn-outline">Search</button>
      </div>
        </div>
        <div className="w-72">
        <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;