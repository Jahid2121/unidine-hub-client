import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CheckOutForm = ({price,image, name}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    useEffect( () => {
       if(price){
        axiosSecure.post('/create-payment-intent', {price: price})
       .then(res => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
       })
       }
    }, [axiosSecure, price])




    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
          }


          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          })

          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }

          const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'unknown'
                }
            }
          })
          if (confirmError) {
            console.log('[confirm error]', confirmError);
          } else {
            console.log('[Payment Intent]', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                console.log('transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id)


                const payment = {
                    email: user?.email,
                    name: name,
                    transactionId: paymentIntent.id,
                    image: image,

                }
              const res = await axiosSecure.post('/payments', payment)
              if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Successfully upgraded to ${name}`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/", { state: { from: location } });
              }
            }
          }
    }

  return (
    <form onSubmit={handleSubmit}>
         <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8}}  className="bg-customSalmon p-2 mt-3 rounded-md text-white my-1 md:my-3" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </motion.button>
      <p className="text-xl text-red-700">{error}</p>
      { transactionId && <p className="text-xl text-green-700">Your Transaction Id: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;