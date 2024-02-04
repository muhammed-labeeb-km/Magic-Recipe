import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Edit() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <i onClick={() => setModalShow(true)} className='fa fa-edit fs-5 text-warning'></i>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Edit;

function MyVerticallyCenteredModal(props) {
  const [displayText, setDisplayText] = useState(
    'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
  );

  const handleTextareaChange = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Chicken biriyani</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          rows={5} // Adjust the number of rows to increase/decrease the height
          value={displayText}
          onChange={handleTextareaChange}
          className='form-control'
          placeholder='Enter text...'
          style={{ resize: 'vertical' }} // Allow vertical resizing
        />
      </Modal.Body>
      <Modal.Footer>
        <div className='d-flex'>
          <button onClick={props.onHide} className='me-2 btn-outline-danger btn'>
            Close
          </button>
          <button className='ms-2 btn btn-outline-success'>Save</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
