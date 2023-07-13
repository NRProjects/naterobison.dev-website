import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from 'react';
import './Register.css'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, password);
        setPassword('');
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="register-container">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johnsmith@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
            <button type="submit">Register</button>
        </form>
        </div>
        
    );
}

export default Register