import React from "react";
import './checkout-item.styles.scss';
import { useDispatch } from "react-redux";
import { removeCartItem, addCartItem, removeItem } from 'redux/cart/cart-actions';

interface IProps {
  item: {
      name: string;
      imageUrl: string;
      price: number;
      quantity: number;
  }
}

const CheckOutItems = (props: IProps) => {
    const { item } = props;
    const { name, imageUrl, price, quantity } = item;
    const dispatch = useDispatch();

    return (
      <div className='checkout-item'>
          <div className='image-container'>
              <img alt='cart item' src={imageUrl}/>
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
              <div className='arrow' onClick={() => dispatch(removeItem(item))}>&#10094;</div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={() => dispatch(addCartItem(item))}>&#10095;</div>
          </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={() => dispatch(removeCartItem(item))}>&#10005;</div>
      </div>
    );
};

export default CheckOutItems;