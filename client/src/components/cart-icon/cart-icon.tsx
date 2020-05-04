import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/cart-icon.svg';
import { useDispatch } from 'react-redux';
import { setCartIconToggle } from "redux/cart/cart-actions";
import { useSelector } from 'react-redux';
import { selectCartQuantity } from 'redux/cart/cart-selector';

const CartIcon = () => {
    const dispatch = useDispatch();
    const quantity = useSelector(selectCartQuantity);

    return (
      <div className='cart-icon' onClick={() => dispatch(setCartIconToggle())}>
          <ShoppingIcon className='shopping-icon'/>
          <span className='item-count'>{quantity}</span>
      </div>
    );
};

export default CartIcon;