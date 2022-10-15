import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import './loggedin.css'

import './firebase';

const auth = getAuth();

function Loggedin(props) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
    }, [email, password]);

    const handleLogin = async (e) => {
        setError(null);

        e.preventDefault();

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const userCredential = response;
            
            localStorage.setItem('user', JSON.stringify(userCredential));
            props.setUser(userCredential);
            
            navigate('/cards');
        } catch (e) {
            console.log(e, e.message, e.code);
            setError(e.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login">

                <img 
                    src="/Assets/login-logo.png"
                    alt="logo"
                    className="login-logo"
                />

                <div className="brand-name">
                    <h1>Gearmerit</h1>
                </div>

                <div className="slogan">
                    <p>Sel it for Right Price</p>
                </div>

                <div className="car-image">

                </div>

                <form className="login-form">
                   <div>
                        <input 
                            type="text" 
                            placeholder="E-Mail....." 
                            className="e-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                   </div>
                    <div>
                        <input 
                            type="password"
                            placeholder="Password....."
                            className="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                     
                    <button 
                        type="submit"
                        className="login-button"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </button>
                    
                    
                     
                </form>

                {error && <div className="login-error">
                    {error}
                </div>}

            </div>
        </div>
    );

}

export default Loggedin;