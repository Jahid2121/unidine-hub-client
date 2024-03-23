import { motion } from "framer-motion";

const LoadingAnime = () => {
    return (
        <div>
              <motion.img
        src={"https://i.ibb.co/T0VTkGN/bibimbap.png"}
        alt="Logo"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="w-36 h-36"
      />

        </div>
    );
};

export default LoadingAnime;