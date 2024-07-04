import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Signup.css'; // Import your CSS file

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        profession: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        // Validate required fields
        Object.keys(formData).forEach((key) => {
            if (formData[key] === '') {
                newErrors[key] = 'This field is required';
            }
        });

        // Validate email format
        if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate phone number format
        if (formData.phone && !/^\d*$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be numeric';
        }

        // Validate password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            localStorage.setItem('userData', JSON.stringify(formData));
            alert('Signup successful!');
            navigate("/login");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="form-container bg-cover bg-center">
            <div className="form-box">
                <h1 className="form-title">Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                        />
                        <label className="form-label">First Name</label>
                        {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                    </div>
                    <div className="form-input">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                        <label className="form-label">Last Name</label>
                        {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                    </div>
                    <div className="form-input">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <label className="form-label">Email</label>
                        {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-input">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <label className="form-label">Password</label>
                        {errors.password && <span className="form-error">{errors.password}</span>}
                    </div>
                    <div className="form-input">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                        />
                        <label className="form-label">Confirm Password</label>
                        {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                    </div>
                    <div className="form-input">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                        />
                        <label className="form-label">Phone Number</label>
                        {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-input">
                        <select
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                        >
                            <option value="">Select Profession</option>
                            <option value="student">Student</option>
                            <option value="engineer">Engineer</option>
                            <option value="doctor">Doctor</option>
                            <option value="teacher">Teacher</option>
                        </select>
                        <label className="form-label">Profession</label>
                        {errors.profession && <span className="form-error">{errors.profession}</span>}
                    </div>
                    <div className="form-actions">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="form-submit">Signup</button>
                    <div className="form-login-link">
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
