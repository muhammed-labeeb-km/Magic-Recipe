import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
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

  const handleProfile = () =>{
    navigate('/profile')
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
        <div className='me-3' >
        <img onClick={handleProfile} src="https://i.postimg.cc/T1Bzk1TQ/profile-pic.png" height={'50px'} alt="" />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
