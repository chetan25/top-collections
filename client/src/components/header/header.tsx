import React from "react";
import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from 'assets/icon.png';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from "components/cart-icon/cart-icon";
import CartDropDown from "components/cart-dropdown/cart-dropdown";
import { cartToggleSelector } from 'redux/cart/cart-selector';
import { userSelector } from 'redux/user/user-selectors';
import { signOutStart } from 'redux/user/user-actions';

const Header = () => {
    const currentUser = useSelector(userSelector);
    const isCartHidden = useSelector(cartToggleSelector);
    const dispatch = useDispatch();

    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <img src={Logo} alt="Logo"  className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>Shop</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => dispatch(signOutStart())}>
                            Sign Out
                        </div>
                        :
                        <Link to='/signIn' className='option'>SignIn</Link>
                }
                <CartIcon/>
            </div>
            {
                isCartHidden ? null : <CartDropDown/>
            }
        </div>
    );
};

export default Header;