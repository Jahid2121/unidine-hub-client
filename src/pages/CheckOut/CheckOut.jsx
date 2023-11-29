
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)

const CheckOut = () => {
  const [pack] = useLoaderData();
  const { image, name, price, description, benefits } = pack || {};


  return (
    <div className="flex justify-center items-center mt-8">
      <div className="max-w-xl bg-white p-8 rounded-md shadow-md">
        <SectionTitle  subHeading="checkout" />
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <img src={image} alt={name} className="w-16 h-16 mr-4" />
              <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <p className="text-gray-600 mb-4">${price}</p>
            <span>Description</span>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-700">{benefits}</p>
            </div>
          </div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={price} image={image} name={name} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckOut;
