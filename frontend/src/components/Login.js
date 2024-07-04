import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import './Login.css'; // Import your CSS file

function Login({ validCredentials, setValidCredentials }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData && formData.email === storedData.email && formData.password === storedData.password) {
            setValidCredentials(true);
            alert("Login successful!");
            navigate('/companyinfo');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            <div className='login-form'>
                <h1 className='login-title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='login-input'>
                        <input
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter Email Address"
                        />
                        <label className='login-label'>Your Email</label>
                        <BiUser className='absolute top-1 text-red-600 right-4'/>
                    </div>
                    <div className='login-input'>
                        <input
                            type="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Your Password"
                        />
                        <label className='login-label'>Your Password</label>
                        <AiOutlineUnlock className='absolute top-1 text-red-600 right-4'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='login-checkbox'>
                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <Link to='' className='login-forgot'>Forgot Password?</Link>
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                    <div className='login-create-account'>
                        <span>New Here? <Link className='text-white-600' to='/signup'>Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
