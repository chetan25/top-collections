import React from "react";
import './cart-dropdown.styles.scss';
import Button from "components/button/button";
import CartItem from "components/cart-iitem/cart-item";
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from 'redux/cart/cart-selector';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";
import { setCartIconToggle } from "redux/cart/cart-actions";

interface IProps extends RouteComponentProps {
}

const CartDropDown = (props: IProps) => {
    const { history } = props;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const goToCheckout = () => {
        dispatch(setCartIconToggle());
        history.push('/checkout')
    };

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length > 0 ?
                        cartItems.map((item: any) => {
                            return <CartItem key={item.id} {...item} />
                        }) :
                        <span className='empty-message'>
                            Your Cart is empty
                        </span>
                }
            </div>
            <Button onClick={goToCheckout}>Go To CHECKOUT</Button>
        </div>
    );
};

export default withRouter(CartDropDown);