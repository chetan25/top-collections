import React from "react";
import './checkout-item.styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, addCartItem, removeItem } from 'redux/cart/cart-actions';
import { userIdSelector } from 'redux/user/user-selectors';

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
    const uid = useSelector(userIdSelector);

    const addItem = () => {
        dispatch(addCartItem({
            uid,
            item
        }))
    };

    const deleteItem = () => {
        dispatch(removeItem({
            item,
            uid
        }));
    }

    const clearItemFromCart = () => {
        dispatch(removeCartItem({
            item,
            uid
        }));
    };

    return (
      <div className='checkout-item'>
          <div className='image-container'>
              <img alt='cart item' src={imageUrl}/>
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
              <div className='arrow' onClick={deleteItem}>&#10094;</div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={addItem}>&#10095;</div>
          </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={clearItemFromCart}>&#10005;</div>
      </div>
    );
};

export default CheckOutItems;