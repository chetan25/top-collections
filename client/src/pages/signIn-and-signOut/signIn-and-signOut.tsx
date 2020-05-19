import React from "react";
import './signIn-and-signOut.styles.scss';
import SignIn from "./signIn";
import Register from "./register";
import Spinner from "components/spinner/spinner";
import { userSignInProgressSelector } from 'redux/user/user-selectors';
import { useSelector } from "react-redux";

const SignInAndSignOut = () => {
    const isProcessing = useSelector(userSignInProgressSelector);

    return (
        <>
            <div className='sign-in-register'>
                <SignIn/>
                <Register/>
            </div>
            {
                isProcessing ?
                    <div className='sign-in-register-spinner'>
                        <Spinner/>
                    </div> : null
            }
        </>
    );
};

export default SignInAndSignOut;
