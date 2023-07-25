import './Authentication.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Authentication() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true)
            navigate('/home')
        } else {
            console.log('Bad username and password')
        }
        
    };

    const handleRegister = () => {
        console.log(isLoggedIn)
        navigate('/register')
    }

    return (
        <div>
            <h1>Sign in or Register</h1>
            <div className='login-form-container'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='button-container'>
                    <button onClick={handleLogin}>
                        Login
                    </button>

                    <button onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Authentication