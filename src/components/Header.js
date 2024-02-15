import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Header({removeName}) {

  const [loginStatus,setLoginStatus] = useState(false)
  const [nameIs,setNameIs] = useState('')

  const location = useLocation();
  const navigate = useNavigate();

  const getLinkStyle = (targetPath) => {
    const isActive = location.pathname.includes(targetPath);

    return {
      color: isActive ? 'white' : 'gray',
      fontSize: isActive ? '1.1rem' : '1rem',
      cursor: 'pointer',
    };
  };

  const handleLinkClick = (targetPath) => {
    navigate(targetPath);
  };

  useEffect(()=>{
    const myName = sessionStorage.getItem("username")
    setNameIs(myName)
    const tokenPresent = sessionStorage.getItem("token")
    if(tokenPresent){
      setLoginStatus(true)
    }else{
      setLoginStatus(false)
    }
  },[])

  const handleProfile = () =>{
    
    const tokenPresent = sessionStorage.getItem("token")
    
    if(tokenPresent){
      navigate('/profile')
    }else{
      navigate('/login')
    }
    
  }


  return (
    <div  >
      <Navbar expand="lg" className="" style={{ backgroundColor: 'darkred' }}>
        <Container  style={{ minHeight: '70px' }} >
          <Navbar.Brand className='fs-1 fw-bolder' style={{ color: 'darkorange' }}>
            <i> MagicRecipe </i>
          </Navbar.Brand>
          <Navbar.Toggle style={{ color: 'whitesmoke', border: 'none', backgroundColor: 'darkorange' }} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className=" setBg" style={getLinkStyle('/explore')} onClick={() => handleLinkClick('/explore')}>Explore</Nav.Link>
              <Nav.Link className=" setBg" style={getLinkStyle('/saved')} onClick={() => handleLinkClick('/saved')}>Saved</Nav.Link>
              <Nav.Link className=" setBg" style={getLinkStyle('/upload')} onClick={() => handleLinkClick('/upload')}>Upload</Nav.Link>
              <Nav.Link className=" setBg" style={getLinkStyle('/search')} onClick={() => handleLinkClick('/search')}>Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div onClick={handleProfile} className='me-3 d-flex align-items-center' >
        {removeName ? null : loginStatus && <span className="text-white">{nameIs}</span>}
        <img  src="https://i.postimg.cc/T1Bzk1TQ/profile-pic.png" height={'50px'} alt="" />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
