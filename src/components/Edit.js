import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDesc } from '../services/allAPI';

function Edit({ recipeDetails }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toDisplay,setToDisplay] = useState(recipeDetails.itemDesc)

  // const [toChange,setTochange] = useState({recipeDetails})
  // console.log(recipeDetails);
  const handleSaveChanges = async(e) =>{

    try{
      const reqBody={
        _id:recipeDetails._id,
        toDisplay:toDisplay
      }
      const result = await updateDesc(reqBody)
      if(result.status==200){
        console.log('Successfully updated Description');
        window.location.reload();
      }
      else {
        console.log('Failed to update comments:', result.response.data);
      }

    }catch(err){
      console.log(err);
    }


  }
  
  // console.log(toChange);

 
  return (
    <div>
      <i onClick={handleShow} className='fa fa-edit fs-5 text-warning'></i>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{recipeDetails.itemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className='w-100 form-control'
            rows={8} // Adjust the number of rows to increase/decrease the height
            value={toDisplay}
            onChange={(e) => {setToDisplay(e.target.value)}}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Edit;
