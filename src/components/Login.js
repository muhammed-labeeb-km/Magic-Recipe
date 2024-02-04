import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  const handleLoginButton = () => {
    navigate('/explore')
  }

  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
      <div className='text-center text-dark'>
        <h1 style={{overflowY:'hidden'}} ><b>LOGIN</b></h1>
      </div>
      <div className='container p-1 bg-secondary rounded my-2'>
        <form action=''>
          <label className='text-white'>
            User Name
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
        <button onClick={()=>{handleLoginButton()}} className='btn mt-3 btn-outline-warning w-25' > <b> Sign In </b> </button>
        <div className='text-end mt-4 text-primary container pe-5' >
        <Link to={'/register'} style={{textDecoration:'none'}} >
        Doesn't have any account?
        </Link>
        </div>
  </div>
  );
}

export default Login;
