import React from "react";
import './button.styles.scss';

interface IProps {
    type?: "button" | "submit" | "reset" | undefined;
    children: React.ReactNode;
    isGoogleSignIn?: boolean;
    onClick?: () => void;
    inverted?: boolean;
}
const Button = (props: IProps) => {
    const { type = 'button', children, isGoogleSignIn, onClick, inverted } = props;

    return (
      <button
          className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
          type={type}
          onClick={onClick}
      >
          {children}
      </button>
    );
};

export default Button;