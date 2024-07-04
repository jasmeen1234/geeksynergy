import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, AiOutlineUnlock } from 'react-icons/bi';

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
        <div className="flex items-center justify-center min-h-screen" style={{"background": "url('./bg.jpg')"}}>
            <div className="bg-white border border-gray-300 rounded-md p-8 shadow-lg w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center  bg-blue-600 mb-6 rounded-full">Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative my-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="First Name"
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                        {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
                    </div>
                    <div className="relative my-4">
                        <input
                            type="text"
                           
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Last Name "
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                        {errors.lastName && <span className="text-red-600">{errors.lastName}</span>}
                    </div>
                    <div className="relative my-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Enter Email Address "
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        {errors.email && <span className="text-red-600">{errors.email}</span>}
                    </div>
                    <div className="relative my-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Password "
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        {errors.password && <span className="text-red-600">{errors.password}</span>}
                    </div>
                    <div className="relative my-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" Confirm Password"
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                        {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword}</span>}
                    </div>
                    <div className="relative my-4">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="Enter Phone Number"
                        />
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                        {errors.phone && <span className="text-red-600">{errors.phone}</span>}
                    </div>
                    <div className="relative my-4">
                        <select
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            className="block w-full py-2.5 px-0 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        >
                            <option value="">Select Profession</option>
                            <option value="student">Student</option>
                            <option value="engineer">Engineer</option>
                            <option value="doctor">Doctor</option>
                            <option value="teacher">Teacher</option>
                        </select>
                        <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profession</label>
                        {errors.profession && <span className="text-red-600">{errors.profession}</span>}
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
                        </div>
                        <Link to="/forgot-password" className="text-sm text-blue-600">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-lg mt-6 rounded-full bg-blue-600 text-white py-2 hover:bg-blue-800 transition-colors duration-300">Signup</button>
                    <div className="text-center mt-4">
                        <span>Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
