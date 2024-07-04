import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import CompanyInfo from './components/CompanyInfo'

function App() {
  console.log("hiii")
  const [validCredentials, setValidCredentials] = useState(false);
  // "url('./components/assets/bg1.jpeg')"
  return (
    <>
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover'  style={{ backgroundImage: "url('/bg.jpg')" }}>
    <Routes>
      <Route path='/login'element={<Login  setValidCredentials={setValidCredentials} />}/>
      <Route path='/' element={<Signup/>}/>
      <Route path="/companyinfo" element={<CompanyInfo />} />
    </Routes>
  
    </div>
    </>
  )
}

export default App
