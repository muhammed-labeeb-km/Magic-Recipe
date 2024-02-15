import React, { useEffect, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { registerAPI } from '../services/allAPI';

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    itemSaved:[]
  });

  const [showAlert, setShowAlert] = useState(true);

  // useEffect(() => {
  //   const alertTimeout = setTimeout(() => {
  //     setShowAlert(false);
  //   }, 4000);

  //   return () => {
  //     clearTimeout(alertTimeout);
  //   };
  // }, []);

  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
  
    if (!username || !email || !password) {
      alert("Fill the form completely ");
    } else {
      // console.log(userData);
      try {
        const result = await registerAPI(userData);
        if(result.status == 200){
          alert(`${result.data.username} Successfully registerd`);
          setUserData({
                username: "",
                email: "",
                password: ""})
          navigate('/login');
          }
        
        else{
          alert(result.response.data)
        }
      } catch (err) {
        console.log("Error:", err);
      }
    }
  }
  

  const navigate = useNavigate();
  const handleRegisterClose = () => {
    navigate('/login');
  }

  return (
    <div style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }} className='d-flex flex-column p-5 justify-content-center '>
      <div className='align-items-center border p-5'>
        <div className='text-center text-dark'>
          <h1 style={{ overflowY: 'hidden' }}><b>REGISTER</b></h1>
        </div>
        <div className='container p-1 bg-secondary rounded my-2'>
          <form action=''>
            <label className='text-white'>
              User Name
              <input value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} type='text' className='remHov text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
            </label>
          </form>
        </div>
        <div className='container p-1 bg-secondary rounded my-2'>
          <form action=''>
            <label className='text-white'>
              Email
              <input value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type='email' className='remHov text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
            </label>
          </form>
        </div>
        <div className='container p-1 bg-secondary rounded my-2'>
          <form action=''>
            <label className='text-white'>
              Password
              <input value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type='password' className='text-white w-100 rounded bg-secondary' style={{ border: 'none', outline: 'none' }} />
            </label>
          </form>
        </div>

        <div className='mt-4 d-flex justify-content-end '>
          <button className='btn mt-3 btn-outline-warning mx-5' onClick={e => { handleRegister(e) }}> <b> REGISTER </b> </button>
          <button onClick={handleRegisterClose} className='btn mt-3 btn-outline-danger mx-5' > <b> CANCEL </b> </button>
        </div>
      </div>
    </div>)
}

export default Register;
