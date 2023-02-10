import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='py-5' style={{backgroundColor:"#ffd333", minHeight:"100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <form action="">
          <h3 className='text-center'>Login</h3>
          <p className='text-center'>Login to your Account to continue</p>
        <CustomInput type='text' label='Email Address' id= "email" />
        <CustomInput type='text' label='Password' id= "pass" />
        <div className='mb-3 text-end'>
          <Link to="/forgot-password" >Forgot Password</Link>
        </div>
        <Link to="/admin" className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{backgroundColor:"#ffd333"}} type="submit">Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
