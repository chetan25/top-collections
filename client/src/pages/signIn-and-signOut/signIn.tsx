import React, { SyntheticEvent, useState} from "react";
import './signIn.styles.scss';
import FormInput from "components/form-input/form-input";
import Button from 'components/button/button';
import { googleSignInStart, emailSignInStart } from "redux/user/user-actions";
import { useDispatch } from "react-redux";
import { userSignInErrorSelector } from 'redux/user/user-selectors';
import { useSelector } from "react-redux";

interface IState {
    email: string;
    password: string;
}
const SignIn = () => {
    const error = useSelector(userSignInErrorSelector);
   const [credentials, setCredentials] = useState<IState>({
       email: '',
       password: ''
   });
   const dispatch = useDispatch();

   const signInWithGoogleStart = () => {
       dispatch(googleSignInStart())
   };

   const handleSubmit = async (event: SyntheticEvent) => {
       event.preventDefault();
       const { email, password } = credentials;
       dispatch(emailSignInStart(email, password));
   };

   const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
       const {value, name} = event.target;
       const newValue = {
           ...credentials,
           [name]: value
       };
       setCredentials(newValue);
   };

   return (
     <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
             <FormInput
                 name='email'
                 type='email'
                 value={credentials.email}
                 isRequired={true}
                 handleChange={handleChange}
                 label='Email'
             />
             <FormInput
                 name='password'
                 type='password'
                 value={credentials.password}
                 isRequired={true}
                 handleChange={handleChange}
                 label='Password'
             />
             <div className='buttons'>
                 <Button type='submit'>Sign In</Button>
                 <Button onClick={signInWithGoogleStart} isGoogleSignIn={true}>Sign In With Google</Button>
             </div>
         </form>
         <div className='sign-in-error'>
             {
                 error ?
                     <>
                         <span>Please Fix the Errors and try again</span>
                         <ul><li>{error.message}</li></ul>
                     </>
                     : null
             }
         </div>
     </div>
   );
};

export default SignIn;