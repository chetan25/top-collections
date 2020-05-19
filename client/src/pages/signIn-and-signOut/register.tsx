import React, {SyntheticEvent, useState} from "react";
import FormInput from "components/form-input/form-input";
import Button from "components/button/button";
import './register.styles.scss';
import { useDispatch } from "react-redux";
import { registrationStart } from 'redux/user/user-actions';
import { userRegistrationErrorSelector } from 'redux/user/user-selectors';
import { useSelector } from "react-redux";

const Register = () => {
    const error = useSelector(userRegistrationErrorSelector);
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        dispatch(registrationStart(email, password, displayName));
    };

    return (
      <div className='sign-up'>
          <h2 className='title'>
              I do not have an account
          </h2>
          <span>Sign up with email and password</span>
          <form className='sign-up-form' onSubmit={handleSubmit}>
              <FormInput
                  handleChange={(e) => setDisplayName(e.target.value)}
                  type='text'
                  value={displayName}
                  name='displayName'
                  label='Display Name'
              />
              <FormInput
                  handleChange={(e) => setEmail(e.target.value)}
                  type='email'
                  value={email}
                  name='email'
                  label='Email'
              />
              <FormInput
                  handleChange={(e) => setPassword(e.target.value)}
                  type='password'
                  value={password}
                  name='password'
                  label='Password'
              />
              <FormInput
                  handleChange={(e) => setConfirmPassword(e.target.value)}
                  type='password'
                  value={confirmPassword}
                  name='confirmPassword'
                  label='Confirm Password'
              />
              <div className='sign-up-button'>
                  <Button type='submit'>SIGN UP</Button>
              </div>
          </form>
          <div className='registration-error'>
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

export default Register;