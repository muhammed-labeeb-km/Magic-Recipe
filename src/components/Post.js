import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit'

function Post({ i, makeBig }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setIsCommented(!isCommented);
    setModalShow(true);
    setIsCommented(false);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const [modalShow, setModalShow] = React.useState(false);

  const navigate = useNavigate();

  const handleEachItems = () => {
    navigate(`/item/${i}`);
  };

  return (
    <div>
      <Card
       
        style={{
          width: makeBig ? '27rem' : '18rem',
          height: '380px',
        }}
      >
        <Card.Img
          variant="top"
          className="p-3"
          src="https://i.postimg.cc/jjTCQFcC/download-2.jpg"
          height={'160px'}
        />
        <Card.Body className="">
          <Card.Title style={{overflowY:'hidden'}} className="text-center">Chicken Biriyani</Card.Title>

          <div className="d-flex justify-content-evenly mt-3">
            <div className="d-flex align-items-center">
              <FaHeart
                className={isLiked ? 'text-danger' : 'text-dark'}
                onClick={handleLikeClick}
                style={{ cursor: 'pointer' }}
              />
              <span> &nbsp; 3</span>
            </div>

            <div className="d-flex align-items-center">
              <FaComment
                className={isCommented ? 'text-secondary' : 'text-dark'}
                onClick={handleCommentClick}
                style={{ cursor: 'pointer' }}
              />
              <span> &nbsp; 3</span>
            </div>

            <div className="d-flex align-items-center">
              <FaBookmark
                className={isBookmarked ? 'text-primary' : 'text-dark'}
                onClick={handleBookmarkClick}
                style={{ cursor: 'pointer' }}
              />
              <span> &nbsp; 3</span>
            </div>
          </div>

          <br />
          <span>How to make Chicken Biryani -Recipe unique collection... </span>
          <span style={{cursor:'pointer'}} onClick={handleEachItems} className="rounded text-primary">
            {' '}
            Click here to know more
          </span>
          {
            makeBig && 
            <div className='d-flex justify-content-evenly align-items-center mt-4' >
            <Edit></Edit>
            <i className='fa fa-trash fs-5 text-danger' ></i>
            </div>
          }
        </Card.Body>
       
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </div>
  );
}

export default Post;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Suggestions and Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="border rounded my-1">Nicee💥</div>
        <div className="border rounded my-1">Try another dish 🤤🤤</div>
        <div className="border rounded my-1"> 🤩Love from antartica </div>
      </Modal.Body>

      <div className="p-3">
        <input
          type="text"
          className="form-control  "
          placeholder="Type here..."
        />
      </div>
      <Modal.Footer>
        <Button className="btn btn-warning">Post</Button>
        <Button className="btn btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
