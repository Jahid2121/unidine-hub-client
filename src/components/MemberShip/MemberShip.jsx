import { Link } from "react-router-dom";
import useMembership from "../../hooks/useMembership/useMembership";
import Btn from "../Btn";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../pages/CheckOut/CheckOutForm";
import { FaBackward, FaMedal } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const MemberShip = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { isPending, isError, error, memberShipData } = useMembership();

  if (isPending) {
    return <span className="loading-spinner"></span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <section id="membership" className="py-16 bg-gray-200">
      <div className="text-center">
        <SectionTitle heading="package" subHeading="Membership Packages" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberShipData.map((pack) => {
            return (
            <div
            key={pack._id}>
                <motion.div

                layoutId={pack._id}
                onClick={() => {
                  setSelectedId(pack._id); setOverlayVisible(true)
                }}
                layout transition={{type: "spring", stiffness: 500, damping: 30 }}
                key={pack._id}
                className="bg-white cursor-pointer hover:shadow-2xl  p-6 rounded-lg shadow"
              >
                <div className="flex flex-col h-[300px] flex-grow">
                  <img
                    src={pack.image}
                    className="w-44 flex mx-auto mb-3"
                    alt={pack.name}
                  />
                  <h3 className="text-xl font-bold mb-4">{pack.name}</h3>
                  <p className="text-3xl">
                    Price: $
                    <span className="text-customSalmon">{pack.price}</span>
                  </p>
                </div>

              </motion.div>
          <AnimatePresence>
            {overlayVisible && selectedId === pack._id && (
              <motion.div 
              initial={{ opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ duration: 0.5}}
              className="fixed z-40 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div className="max-w-xl bg-white p-8 rounded-md shadow-md">
        <SectionTitle  subHeading="checkout" />
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <img src={pack.image} alt={name} className="w-16 h-16 mr-4" />
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <p className="text-gray-600 text-2xl mb-4">$<span className=" text-customSalmon">{pack.price}</span></p>
            <p className="text-sm text-gray-700 mb-4">{pack.description}</p>
            <div className="border-t border-gray-300 pt-4">
              <p>Benefits:</p>
              <p className="text-sm text-gray-700">{pack.benefits}</p>
            </div>
          </div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={pack.price} image={pack.image} name={pack.name} />
        </Elements>
      </div>
                <motion.button whileHover={{scale: 1.9}} className="relative -top-64 right-14 text-2xl" onClick={() => setSelectedId(null)} ><FaBackward /></motion.button>
              </motion.div>
            )}
          </AnimatePresence>
            </div>
            );
          })
          
          }

        </div>
      </div>
    </section>
  );
};

export default MemberShip;
