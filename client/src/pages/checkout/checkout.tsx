import React, { useState } from "react";
import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart-selector';
import CheckOutItems from 'components/checkout-item/checkout-item';
import StripeCheckoutButton from 'components/stripe-button/stripe-button';
import { useDispatch } from "react-redux";
import { clearOutCart } from 'redux/cart/cart-actions';

const CheckOut = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal =  useSelector(selectCartTotal);
   const dispatch = useDispatch();
   const [toastClass, setToastClass] = useState('snackbar');

   const processPayment = (message: string) => {
       if (message === 'success') {
           setToastClass('snackbar show');
           // After 3 seconds, remove the show class from DIV
           setTimeout(() => {
               setToastClass('snackbar');
           }, 3000);
           dispatch(clearOutCart());
       } else {

       }
   }
   return (
       <div className='checkout-page'>
           {
               cartItems.length > 0 ?
                   <>
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
                       <StripeCheckoutButton price={cartTotal} callBackFn={processPayment} />
                   </> :
                   <>
                       <div className={toastClass}>Thank you for shopping with us.</div>
                       <span className='empty-message'>
                        Your Cart is empty
                   </span>
                   </>
           }
       </div>
   );
};

export default CheckOut;