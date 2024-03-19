import { motion } from "framer-motion"

const Btn = ({ title }) => {
  return (
    <motion.span  style={{borderRadius: '0 30px 30px 30px'}} className=" mt-4 bg-customSalmon text-white px-4 py-2 ">
      {title}
    </motion.span>
  );
};

export default Btn;
