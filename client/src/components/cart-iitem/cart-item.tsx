import React from "react";
import './cart-item.styles.scss';

interface IProps {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

const CartItem = (props: IProps) => {
    const { name, imageUrl, price, quantity } = props;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='cart item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} * {price}</span>
            </div>
        </div>
    );
};

export default CartItem;