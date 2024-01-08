import React from 'react';
import LoginForm from '../components/forms/LoginForm.tsx';
import SignUpForm from '../components/forms/SignUpForm.tsx';

const LoginPage: React.FC = () => {
    return (
        <div className="forms-container">
            <LoginForm/>
            <SignUpForm/>
        </div>
    );
};

export default LoginPage;
