import React, {SyntheticEvent, useState} from "react";
import FormInput from "components/form-input/form-input";
import Button from "components/button/button";
import { createAccountWithEmail, createUserProfileDocument } from "firebase/firebase.settings";
import './register.styles.scss';

const Register = () => {
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await createAccountWithEmail(email, password);
            await createUserProfileDocument(user, {displayName});
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch(err) {
            console.log('error');
        }
    };

    return (
      <div className='sign-up'>
          <h2 className='title'>
              I do not have an account
          </h2>
          <span>Sign up with email and password</span>
          <form className='sign-up-form' onSubmit={handleSubmit}>
              <FormInput
                  handleChange={(e) => setDisplayName(e.value.target)}
                  type='text'
                  value={displayName}
                  name='displayName'
                  label='Display Name'
              />
              <FormInput
                  handleChange={(e) => setEmail(e.value.target)}
                  type='email'
                  value={email}
                  name='email'
                  label='Email'
              />
              <FormInput
                  handleChange={(e) => setPassword(e.value.target)}
                  type='password'
                  value={password}
                  name='password'
                  label='Password'
              />
              <FormInput
                  handleChange={(e) => setConfirmPassword(e.value.target)}
                  type='email'
                  value={confirmPassword}
                  name='confirmPassword'
                  label='Confirm Password'
              />
              <Button type='submit'>SIGN UP</Button>
          </form>
      </div>
    );
};

export default Register;