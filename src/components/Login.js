import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginAPI } from '../services/allAPI';
function Login() {

const [loginData,setLoginData] = useState({
  username:"",
  password:""
})


  const navigate = useNavigate()
  const handleLoginButton =async (e) => {
    e.preventDefault()
    const {username,password} = loginData
    // console.log(username,password);
    if(!username || !password){
      alert("complete the form")
    }
    else{
      try{
        const result = await loginAPI(loginData)
        // console.log(result);
        const nameOfUser = result.data.existingUser.username
        const tokenIs = result.data.token
        // console.log(nameOfUser,tokenIs);
        if(result.status == 200){
          alert(`welcome ${nameOfUser}`)
          setLoginData({username:"",password:""})
          sessionStorage.setItem("username",nameOfUser)
          sessionStorage.setItem("token",tokenIs)
          navigate('/explore')
        }
        else{
          alert(result.response.data)
        }
      }
      catch(err){
        console.log(err);
      }

      
    }
    
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
            <input value={loginData.username} onChange={e=>setLoginData({...loginData,username:e.target.value})} type='text' className=' remHov text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
          </label>
        </form>
      </div>
      <div className='container  p-1 bg-secondary rounded my-2'>
        <form action=''  >
          <label className='text-white'>
            Password
            <input value={loginData.password} onChange={e=>setLoginData({...loginData,password:e.target.value})} type='password' className=' text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
          </label>
        </form>
      </div>
        <button onClick={(e)=>{handleLoginButton(e)}} className='btn mt-3 btn-outline-warning w-25' > <b> Sign In </b> </button>
        <div className='text-end mt-4 text-primary container pe-5' >
        <Link to={'/register'} style={{textDecoration:'none'}} >
        Doesn't have any account?
        </Link>
        </div>
  </div>
  );
}

export default Login;