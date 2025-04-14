import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const SignIn = () => {
  return (
    <div>
        <h2>
            Sign In
        </h2>
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    </div>
  );
};

export default SignIn;
