import React from "react";
import './signIn-and-signOut.styles.scss';
import SignIn from "./signIn";
import Register from "./register";

const SignInAndSignOut = () => {
    return (
        <div className='sign-in-register'>
            <SignIn/>
            <Register/>
        </div>
    );
};

export default SignInAndSignOut;
