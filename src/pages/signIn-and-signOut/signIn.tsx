import React, { SyntheticEvent, useState} from "react";
import './signIn.styles.scss';
import FormInput from "components/form-input/form-input";
import Button from 'components/button/button';
import { signInWithGoogle, signInWithEmail} from "firebase/firebase.settings";

interface IState {
    email: string;
    password: string;
}
const SignIn = () => {
   const [credentials, setCredentials] = useState<IState>({
       email: '',
       password: ''
   });

   const handleSubmit = async (event: SyntheticEvent) => {
       event.preventDefault();
       try {
           const { email, password } = credentials;
           await signInWithEmail(email, password);
           setCredentials({
               email: '',
               password: ''
           });
       } catch (error) {
           console.log(error);
       }
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
                 <Button onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In With Google</Button>
             </div>
         </form>
     </div>
   );
};

export default SignIn;