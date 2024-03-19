
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
      
    </div>
  );
};

export default CheckOut;
