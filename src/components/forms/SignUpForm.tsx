import React, { useState } from 'react';
import firebase from '../../firebase/firebase.tsx';
import '../../assets/stylesheets/components/AuthForm.css';

interface User {
    email: string;
    username: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const [newUser, setNewUser] = useState<User>({
        email: '',
        username: '',
        password: '',
    });
    const [signUpSuccess, setSignUpSuccess] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });
    };

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSignUpSuccess(""); // Reset any previous success messages
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
            const user = userCredential.user;
            // Stocker les informations supplémentaires dans Firestore
            await firebase.firestore().collection('users').doc(user.uid).set({
                username: newUser.username,
                email: newUser.email,
            });
            // Set success message
            setSignUpSuccess("Inscription réussie!");
            // Clear form
            setNewUser({ email: '', username: '', password: '' });
        } catch (error) {
            if (error instanceof Error) {
                console.error('Erreur d\'inscription:', error.message);
            } else {
                console.error('Erreur d\'inscription:', error);
            }
        }
    };

    return (
        <div className="auth-form-container">
            <h2 className="auth-form-title">Inscription</h2>
            {signUpSuccess && <div className="auth-form-success">{signUpSuccess}</div>}
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    name="email"
                    className="auth-form-input"
                    value={newUser.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="username"
                    className="auth-form-input"
                    value={newUser.username}
                    onChange={handleInputChange}
                    placeholder="Nom d'utilisateur"
                />
                <input
                    type="password"
                    name="password"
                    className="auth-form-input"
                    value={newUser.password}
                    onChange={handleInputChange}
                    placeholder="Mot de passe"
                />
                <button type="submit" className="auth-form-button">S'inscrire</button>
            </form>
        </div>
    );
};

export default SignUpForm;
