import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase/firebase.tsx';
import '../../assets/stylesheets/components/AuthForm.css';

const LoginForm: React.FC = () => {
    const [loginUser, setLoginUser] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Hook pour la redirection

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value,
        });
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password);
            // Rediriger vers la page d'accueil après une connexion réussie
            navigate('/');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erreur de connexion:', error.message);
            } else {
                console.error('Erreur de connexion:', error);
            }
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">Connexion</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    className="auth-form-input"
                    value={loginUser.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    className="auth-form-input"
                    value={loginUser.password}
                    onChange={handleInputChange}
                    placeholder="Mot de passe"
                />
                <button type="submit" className="auth-form-button">Connexion</button>
            </form>
        </div>
    );
};

export default LoginForm;
