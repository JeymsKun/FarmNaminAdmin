import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (username === 'admin' && password === 'password') {
            alert('Welcome, Admin!');
            navigate('/Dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            padding: '10px'
        }}>
            <div className="login-container" style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
                boxSizing: 'border-box'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img src={require('../img/official_logo.png')} alt="FarmNamin Logo" style={{ width: '100px', height: '100px' }} />
                </div>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>FarmNamin Admin</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required style={{
                        width: '100%',
                        padding: '10px',
                        margin: '10px 0',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                        boxSizing: 'border-box',
                        fontSize: '16px'
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                    onBlur={(e) => e.target.style.borderColor = '#ccc'} />
                    <input type="password" placeholder="Password" required style={{
                        width: '100%',
                        padding: '10px',
                        margin: '10px 0',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        outline: 'none',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        boxSizing: 'border-box',
                        fontSize: '16px'
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#4CAF50';
                        e.target.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.5)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#ccc';
                        e.target.style.boxShadow = 'none';
                    }} />
                    <button type="submit" style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#4CAF50',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#fff',
                        fontSize: '16px',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                    }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Welcome;