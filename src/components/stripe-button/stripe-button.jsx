import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceFOrStripe = price * 100;
    const key = 'pk_test_vt9Jycr0ABbkBMzMcTka0Fd300uKoNBOQQ';

    const onToken = (token) => {
        console.log(token);
    };

    return (
       <StripeCheckout
           name='Top Shopping'
           description={`Your total is $${price}`}
           lable='Pay Now'
           billingAddress={true}
           shippingAddress={true}
           image=''
           amount={priceFOrStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={key}
       />
   );
};

export default StripeCheckoutButton;