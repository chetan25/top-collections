import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const key = 'pk_test_vt9Jycr0ABbkBMzMcTka0Fd300uKoNBOQQ';

    const onToken = (token) => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(success => {
            console.log(success);
        }).catch(error => {
            console.log(error);
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
           stripeKey={key}
       />
   );
};

export default StripeCheckoutButton;