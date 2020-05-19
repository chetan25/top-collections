import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price, callBackFn }) => {
    const priceForStripe = price * 100;
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(success => {
            callBackFn('success');
        }).catch(error => {
            callBackFn('error')
        });
    };

    return (
       <StripeCheckout
           name='Top Shopping'
           description={`Your total is $${price}`}
           lable='Pay Now'
           billingAddress={true}
           shippingAddress={true}
           image=''
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
       />
   );
};

export default StripeCheckoutButton;