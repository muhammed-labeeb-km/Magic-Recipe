import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import Post from '../components/Post';
import { useNavigate } from 'react-router-dom';
import { getUserSpecificDatas } from '../services/allAPI';
import { getUserDetails } from '../services/allAPI';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [removeName,setRemoveName] =useState(true)
  const [userProfileData,setUserProfileData] = useState([])
  const [forDetailsofUser,setForDetailsofUser] = useState({})
  const handleLogout = () => {
    
    setIsLoggedIn(false);

    
    const elements = document.getElementsByClassName('showAndHide');
    for (let element of elements) {
      if (element.id !== 'profileCard') {
        element.style.display = 'none';
      }
    }

    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    
    setRemoveName(false)
  };


  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
    setIsLoggedIn(true);

    const elements = document.getElementsByClassName('showAndHide');
    for (let element of elements) {
      element.style.display = 'inline';
    }
  };


  
  


  const gettingDetails = async()=>{
    try{
      const token = sessionStorage.getItem("token")
      // console.log(token);
      if(token){
        const reqHeader ={
          "Authorization":`Bearer ${token}`
        }
        const result = await getUserDetails (reqHeader)
        if(result.status===200){
          setForDetailsofUser(result.data)
      }
      }

    }
    catch(err){
      console.log(err);
    }
  }
  console.log(forDetailsofUser);
  
  const allDataforUser = async () =>{

    try{
      const token = sessionStorage.getItem("token")
      // console.log(token);
      if(token){
        const reqHeader ={
          "Authorization":`Bearer ${token}`
        }
        const result = await getUserSpecificDatas (reqHeader)
        if(result.status===200){
          setUserProfileData(result.data)
      }
      }
    }
    catch(err){
      console.log(err);
    }
  }

// console.log(userProfileData);

  useEffect(()=>{
    allDataforUser()
    gettingDetails()
  },[])

  // console.log(userProfileData);

  return (
    <div>
      <div className='fixed-top'>
        <Header removeName ></Header>
      </div>
      <Row style={{ marginTop: '80px' }}>
        <Col className='p-5 ' md={4} lg={4}>
          <Card id='profileCard' style={{ width: '18rem', borderColor: 'gray' }} className=''>
            <Card.Img variant="top" width={'100%'} src="https://i.postimg.cc/zXk5XDgv/profile1.jpg" />
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}> <i> <span className='showAndHide' > {forDetailsofUser.username} </span> </i> </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>email: <span className='showAndHide'> {forDetailsofUser.email}</span> </ListGroup.Item>
              <ListGroup.Item>Posts: <span className='showAndHide'> {userProfileData.length} </span> </ListGroup.Item>
            </ListGroup>
            <Card.Body className='text-center'>
              {isLoggedIn ? (
                <div>
                  <button className='btn btn-outline-danger' onClick={handleLogout}>Log Out</button>
                  <button className='btn btn-outline-danger' style={{ display: 'none' }} onClick={handleLogin}>Log In</button>
                </div>
              ) : (
                <div>
                  <button className='btn btn-outline-danger' style={{ display: 'none' }} onClick={handleLogout}>Log Out</button>
                  <button className='btn btn-outline-danger' onClick={handleLogin}>Log In</button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} lg={8} className='p-5'>
          <Row className='text-center ms-2 ' >
            <h1 style={{ overflowY: 'hidden' }}> <i>My Recipes</i></h1>
            {isLoggedIn && userProfileData.map((recipeDetails, indx) => (
              <Col key={indx} className='p-3 '  md={6} lg={6}><Post makeBig recipeDetails={recipeDetails} indx={indx} /></Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
