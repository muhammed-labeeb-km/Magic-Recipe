import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Edit from './Edit';
import SERVER_URL from '../services/serverUrl';
import { settingComments, gettingComments, deleteSaved } from '../services/allAPI';
import { setUserSavedDatas } from '../services/allAPI';
import {deletePost} from '../services/allAPI'

function Post({ recipeDetails, indx, makeBig, forSaved }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [singleComments, setSingleComment] = useState('');
  // const [commentsLoading, setCommentsLoading] = useState(false);
  // const [bookmarkedRecipes, setBookmarkedRecipes] = useState("");
  const bookmarkArray = []
  const navigate = useNavigate();

  useEffect(() => {
    const tokenPresent = sessionStorage.getItem('token');
    if (tokenPresent) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  if (!recipeDetails) {
    return null;
  }



  const handleCommentClick = () => {
    if (loginStatus) {
      setIsCommented(!isCommented);
      handleShow();
    } else {
      navigate('/login');
    }
  };

  const handleBookmarkClick = async () => {
    if (loginStatus) {
      try {
        const token = sessionStorage.getItem('token');
        if (token) {
          const reqHeader = {
            "Authorization": `Bearer ${token}`,
          };
          const reqBody = {
            bookmarkedRecipes: recipeDetails._id
          };
          const result = await setUserSavedDatas(reqBody, reqHeader);
  
          if (result.status === 200) {
            console.log('Successfully updated bookmarks');
          } else {
            console.log('Failed to update bookmarks:', result.response.data);
          }
        }
      } catch (err) {
        console.log('Error updating bookmarks:', err);
      }
    } else {
      navigate('/login');
    }
  };
  
  


  const handleEachItems = () => {
    if (loginStatus) {
      navigate(`/item/${indx + 1}`, { state: { recipeDetails } });
    } else {
      navigate('/login');
    }
  };

  const handleProfileDelete = async(projectId) => {

    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,
      }
    try{
      const result = await deletePost(projectId,reqHeader)
      if(result.status == 200){
        window.location.reload();
      }
      else{
        console.log("not working");
      }
    }catch(err){
      console.log(err);
    }
  }
  }

  const handleSavedDelete = async(projectId) =>{

    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`,
      }
    try{
      const result = await deleteSaved(projectId,reqHeader)
      if(result.status == 200){
        window.location.reload();
      }
      else{
        console.log("not working");
      }
    }catch(err){
      console.log(err);
    }
  }

  }

  const handlePost = async () => {
    
      try {
        const reqBody = {
          _id: recipeDetails._id,
          singleComments: singleComments,
        };

        const token = sessionStorage.getItem('token');
        const reqHeader = {
          "Authorization": `Bearer ${token}`,
        };

        const result = await settingComments(reqBody, reqHeader);

        if (result.status === 200) {
          console.log('Successfully updated comments');
        //  handleClose()
         window.location.reload();
          // fetchComments();
        } else {
          console.log('Failed to update comments:', result.response.data);
        }
      } catch (err) {
        console.log('Error updating comments:', err);
      }

      setSingleComment('');
    }
  ;

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
          
          src={recipeDetails.itemPic ? `${SERVER_URL}/upload/${recipeDetails.itemPic}` : 'fallback_image_url'}
          
          height={'160px'}
        />
        <Card.Body className="">
          <Card.Title style={{overflowY:'hidden'}} className="text-center">{recipeDetails.itemName}</Card.Title>

          <div className="d-flex justify-content-evenly mt-3">
            
            <div className="d-flex align-items-center">
              <FaComment
                className={isCommented ? 'text-secondary' : 'text-dark'}
                onClick={handleCommentClick}
                style={{ cursor: 'pointer' }}
              />
              <span> &nbsp; {recipeDetails.itemComment.length-1}</span>
            </div>

            <div className="d-flex align-items-center">
              <FaBookmark
                className={isBookmarked ? 'text-primary' : 'text-dark'}
                onClick={handleBookmarkClick}
                style={{ cursor: 'pointer' }}
              />  
            </div>
            { forSaved && <div className="d-flex align-items-center">
               <i
                className='fa fa-trash text-danger'
                onClick={()=>{handleSavedDelete(recipeDetails._id)}}
                style={{ cursor: 'pointer' }}
              />  
            </div>}
          </div>

          <br />
          <span>{recipeDetails.itemDesc.length > 40
            ? `${recipeDetails.itemDesc.substring(0, 40)}...`
            : recipeDetails.itemDesc} </span>
          <span style={{cursor:'pointer'}} onClick={handleEachItems} className="rounded text-primary">
            
            Click here to know more
          </span>
          {
            makeBig && 
            <div className='d-flex justify-content-evenly align-items-center mt-4' >
            <Edit recipeDetails={recipeDetails}  />
            <i onClick={()=>{handleProfileDelete(recipeDetails._id)}} className='fa fa-trash fs-5 text-danger' ></i>
            
            </div>
          }
        </Card.Body>
       
      </Card>
      <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{recipeDetails.itemName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      {recipeDetails.itemComment.length>0 &&
        
        recipeDetails.itemComment.map((i,indx)=>(<div key={indx}> {i} <hr /></div>))}
      </Modal.Body>
      <Modal.Footer  >
     
          <Row >
          <Col md={12} lg={12} >
          <input  className='form-control w-100' value={singleComments} onChange={e=>setSingleComment(e.target.value)} type="text" />
          </Col>
          <Col className='text-end mt-3' >
          <Button md={12} lg={12} variant="primary" onClick={handlePost}>
          Post
          </Button>
          </Col>
          </Row>
          <div>

        
          </div>
      </Modal.Footer>
    </Modal>
      
    </div>
  );
}

export default Post;

