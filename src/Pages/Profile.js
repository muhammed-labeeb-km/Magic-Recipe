import React, { useState } from 'react';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap';
import Post from '../components/Post';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Add any logout logic here
    setIsLoggedIn(false);

    // Hide all elements with class 'showAndHide' except the profileCard
    const elements = document.getElementsByClassName('showAndHide');
    for (let element of elements) {
      if (element.id !== 'profileCard') {
        element.style.display = 'none';
      }
    }
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

  const postDataArray = [1, 1, 2];

  return (
    <div>
      <div className='fixed-top'>
        <Header></Header>
      </div>
      <Row style={{ marginTop: '80px' }}>
        <Col className='p-5 position-relative' md={4} lg={4}>
          <Card id='profileCard' style={{ width: '18rem', borderColor: 'gray' }} className='position-fixed'>
            <Card.Img variant="top" width={'100%'} src="https://i.postimg.cc/zXk5XDgv/profile1.jpg" />
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}> <i> <span className='showAndHide' > Olive </span> </i> </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>email: <span className='showAndHide'> olive@123.com </span> </ListGroup.Item>
              <ListGroup.Item>Phone: <span className='showAndHide'>+91 812934176 </span> </ListGroup.Item>
              <ListGroup.Item>Posts: <span className='showAndHide'> 17 </span> </ListGroup.Item>
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
          <Row>
            <h1 style={{ overflowY: 'hidden' }}> <i>My Recipes</i></h1>
            {isLoggedIn && postDataArray.map((i, indx) => (
              <Col key={indx} className='p-3' md={6} lg={6}><Post makeBig /></Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
