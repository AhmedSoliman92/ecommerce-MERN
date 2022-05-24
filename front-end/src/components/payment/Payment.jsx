import axios from 'axios';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';


export default function Payment() {
    const [stripeKey,setStripeKey] = useState(null);

    const onToken = async (token)=>{
        setStripeKey(token)
    if(stripeKey){
        const res = await axios.post('payment/',{token: stripeKey.id, amount:20000, currency: "USD"})
        console.log(res.data)
    }
    };
    useEffect(()=>{

        stripeKey&& onToken();
    })
  return (
    <StripeCheckout
        token={onToken}
        name="MERN"
        image='/assets/images/33.jpg'
        amount={20 *100}
        currency="USD"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  )
}
