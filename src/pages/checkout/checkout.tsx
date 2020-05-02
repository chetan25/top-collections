import React from "react";
import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart-selector';
import CheckOutItems from 'components/checkout-item/checkout-item';
import StripeCheckoutButton from 'components/stripe-button/stripe-button';

const CheckOut = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal =  useSelector(selectCartTotal);

   return (
       <div className='checkout-page'>
          <div className='checkout-header'>
             <div className='header-block'>
                <span>Product</span>
             </div>
             <div className='header-block'>
                <span>Description</span>
             </div>
             <div className='header-block'>
                <span>Quantity</span>
             </div>
             <div className='header-block'>
                <span>Price</span>
             </div>
             <div className='header-block'>
                <span>Remove</span>
             </div>
          </div>
          {
             cartItems.map((item: any) => {
                return <CheckOutItems item={item} key={item.id}/>;
             })
          }
          <div className='total'>
             <span>TotalL ${cartTotal}</span>
          </div>
           <StripeCheckoutButton price={cartTotal} />
       </div>
   );
};

export default CheckOut;