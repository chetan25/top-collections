import React from "react";
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/icon.svg';
import { auth } from "firebase/firebase.settings";
import { useSelector } from 'react-redux';
import CartIcon from "components/cart-icon/cart-icon";
import CartDropDown from "components/cart-dropdown/cart-dropdown";
import { cartToggleSelector } from 'redux/cart/cart-selector';
import { userSelector } from 'redux/user/user-selectors';

const Header = () => {
    const currentUser = useSelector(userSelector);
    const isCartHidden = useSelector(cartToggleSelector);

    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>Shop</Link>
                <Link to='/contact' className='option'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
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