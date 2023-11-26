
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="my-16  mx-auto text-center md:w-5/12">
        <div>
        <p className="bg-[#5EAE53] w-1/5 mx-auto p-1 rounded-xl text-white">{heading}</p>
      <h2 className="text-4xl font-bold text-[#333]">{subHeading}</h2>
        </div>
    </div>
  );
};

export default SectionTitle;