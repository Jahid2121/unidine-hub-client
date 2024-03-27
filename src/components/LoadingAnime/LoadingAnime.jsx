import { motion } from "framer-motion";
import "./LoadingAnime.css"
const LoadingAnime = () => {
    return (
      <div className="mt-20">
        <div className="pan-loader">
      <div className="loader"></div>
      <div className="pan-container">
        <div className="pan"></div>
        <div className="handle"></div>
      </div>
      <div className="shadow"></div>
    </div>
      </div>
  );
            
};

export default LoadingAnime;