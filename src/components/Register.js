import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
function Register() {

  const navigate = useNavigate()
  const handleRegisterClose = () =>{
    navigate('/login')
  }

  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }}  className='d-flex flex-column p-5 justify-content-center ' >
    <div className='align-items-center border p-5' >
      <div className='text-center text-dark'>
        <h1 style={{overflowY:'hidden'}} ><b>REGISTER</b></h1>
      </div>
      <div className='container p-1 bg-secondary rounded my-2'>
        <form action=''>
          <label className='text-white'>
            User Name
            <input type='email' className=' remHov text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
          </label>
        </form>
      </div>
      <div className='container p-1 bg-secondary rounded my-2'>
        <form action=''>
          <label className='text-white'>
            Email
            <input type='email' className=' remHov text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
          </label>
        </form>
      </div>
      <div className='container  p-1 bg-secondary rounded my-2'>
        <form action=''  >
          <label className='text-white'>
            Password
            <input type='password' className=' text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
          </label>
        </form>
      </div>
      <div className='container  p-1 bg-secondary rounded my-2'>
      <form action=''  >
        <label className='text-white'>
          Confirm Password
          <input type='password' className=' text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
        </label>
      </form>
    </div>
    <div className='container  p-1 bg-secondary rounded my-2'>
    <form action=''  >
      <label className='text-white'>
        Phone Number
        <input type='password' className=' text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
      </label>
    </form>
  </div>
  <div className=' mt-4 d-flex  justify-content-end '> 
  <button className='btn mt-3 btn-outline-warning mx-5  ' > <b> REGISTER </b> </button>

  <button onClick={handleRegisterClose} className='btn mt-3 btn-outline-danger mx-5' > <b> CANCEl </b> </button>
  
    </div>
    </div>
    </div>  )
}

export default Register
