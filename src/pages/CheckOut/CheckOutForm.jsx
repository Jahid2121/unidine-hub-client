import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckOutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    useEffect( () => {
       axiosSecure.post('/create-payment-intent', {price: price})
       .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
       })
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
      <button className="bg-customSalmon p-1 rounded-md text-white my-3" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-2xl text-red-700">{error}</p>
    </form>
  );
};

export default CheckOutForm;