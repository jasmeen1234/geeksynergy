import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {BiUser} from 'react-icons/bi'
import {AiOutlineUnlock} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
function Login({ validCredentials, setValidCredentials }) {
  const [formData, setFormData] = useState({
    name: '',
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

const data = new FormData(event.currentTarget);
if (storedData && formData.email === storedData.email && formData.password === storedData.password) {
    setValidCredentials(true);
    alert("login successfully");
    navigate('/companyinfo');
   
} else {
    alert('Invalid Credentials');
}
console.log({
  email: data.get('email'),
  password: data.get('password'),
});
};
  return (
    <div  style={{"background": "url('./bg.jpg')"}}>
      <div className='bg-slate-800border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className='relative my-4'>
          <input type="email"
           className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearence-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
           value={formData.email}
            name="email"
              onChange={handleChange}
              placeholder="Enter Email Address"
           />
         
        <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Email</label>
        <BiUser className='absolute  top-1 text-blue-600 right-4'/>
        </div>
        <div className='relative my-4'>
          <input type="password" 
          className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearence-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'
          value={formData.password}
          onChange={handleChange}
name="password"
          placeholder="Your Password"
          
          />
          <label htmlFor="" className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>YOur Password</label>
          <AiOutlineUnlock className='absolute top-1 text-blue-600 right-4'/>
        </div>
        <div className='flex justify-between items-center'> 
        <div className='flex gap-2 items-center'>
          <input type="checkbox" name="" id=""/>
          <label htmlFor="Remember Me">Remember Me</label>
        </div>
        <Link  to='' className='text-blue-600'>Forgot Password?</Link>
        </div>
        <button type="submit" className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Login</button>
        <div>
            <span className="m-4" >
                {/* New Here? <Link className=' to='sign up'>Create an Account</Link> */}
                New Here? <Link className='text-blue-600'  to='/signup'>Create an Account</Link>

            </span> 
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
