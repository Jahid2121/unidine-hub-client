const Btn = ({ title }) => {
  return (
    <button style={{borderRadius: '0 30px 30px 30px'}} className=" mt-4 bg-customSalmon text-white px-4 py-2 ">
      {title}
    </button>
  );
};

export default Btn;
