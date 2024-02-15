import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import SERVER_URL from '../services/serverUrl';
function Eachitems() {
  const [modalShow, setModalShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const location = useLocation();
  const { recipeDetails } = location.state;

  console.log(recipeDetails);


  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <Row>
        <Col className='p-5' lg={4} md={4}>
          <img src={`${SERVER_URL}/upload/${recipeDetails.itemPic}`} alt="" width={'100%'} />
          <div className='d-flex justify-content-evenly mt-5'>
            <FaComment onClick={() => setModalShow(true)} className='text-dark' style={{ cursor: 'pointer' }} />
            <span>&nbsp;{recipeDetails.itemComment.length}</span>
            <FaBookmark
              className={isBookmarked ? 'text-primary' : 'text-dark'}
              onClick={handleBookmarkClick}
              style={{ cursor: 'pointer' }}
            />
            
          </div>
        </Col>
        <Col lg={1} md={1}></Col>
        <Col lg={6} md={6} className='p-5'>
          <div className='text-center fs-1 '>
            <b>{recipeDetails.itemName}</b>
          </div>
          <div className='mt-5'>
            <span className='text-secondary '>
              {recipeDetails.itemDesc}
            </span>
          </div>
        </Col>
      </Row>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Eachitems;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Suggestions and Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='border rounded my-1'>Nicee💥</div>
        <div className='border rounded my-1'>Try another dish 🤤🤤</div>
        <div className='border rounded my-1'>🤩Love from Antarctica </div>
      </Modal.Body>
      <div className='p-3'>
        <input type="text" className='form-control' placeholder='Type here...' />
      </div>
      <Modal.Footer>
        <Button className='btn btn-warning'>Post</Button>
        <Button className='btn btn-danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
