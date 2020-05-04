import React, { SyntheticEvent, useState} from "react";
import './signIn.styles.scss';
import FormInput from "components/form-input/form-input";
import Button from 'components/button/button';
import { googleSignInStart, emailSignInStart } from "redux/user/user-actions";
import { useDispatch } from "react-redux";

interface IState {
    email: string;
    password: string;
}
const SignIn = () => {
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

   const handleChange = (event: any) => {
       const {value, name} = event;
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
     </div>
   );
};

export default SignIn;