import React from 'react';
import Header from '../components/Header';

function Upload() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted!');
  };

  return (
    <div>
    <div className='fixed-top' >
      <Header />
    </div>
      <div style={{marginTop:'80px'}} className='text-center'>
        <br />
        <hr />
        <span className='text-secondary'>
          <h1><b><i>UPLOAD</i></b></h1>
        </span>
        <hr />
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="itemName" className="form-label" style={{ fontWeight: 'bold', color: '#333' }}>Item Name</label>
            <input type="text" id="itemName" className='form-control w-50' placeholder='Enter item name' />
          </div>
          <div className="mb-3">
            <label htmlFor="itemDescription" className="form-label" style={{ fontWeight: 'bold', color: '#333' }}>Item Description</label>
            <textarea id="itemDescription" className='form-control w-50' placeholder='Enter item description'></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label" style={{ fontWeight: 'bold', color: '#333' }}>Item's Image URL</label>
            <input type="text" id="imageUrl" className='form-control w-50' placeholder='Enter item image URL' />
          </div>
          <div className='ms-2'>
            <button type="submit" className="btn w-25 btn-outline-warning">POST</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
