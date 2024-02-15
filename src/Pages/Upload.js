import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';
import { addRecipeAPI } from '../services/allAPI';

function Upload() {

  
  
  const [preview,setPreview] = useState("")
  
  const [imageStatus, setImageStatus] = useState(false);
  const [recipeData, setRecipeData] = useState({
    itemName: "",
    itemDesc: "",
    itemPic: "",
    itemLike: 0,
    itemComment: []
  });

  useEffect(() => {
    if (recipeData.itemPic.type === 'image/png' || recipeData.itemPic.type === 'image/jpg' || recipeData.itemPic.type === 'image/jpeg') {
      setImageStatus(true);
      console.log("generated the correct image");
      setPreview(URL.createObjectURL(recipeData.itemPic));
    }
    else {
      setImageStatus(false);
      setPreview("")
      setRecipeData({...recipeData,itemPic:""})
      // console.log("image with wrong format");
    }
  }, [recipeData.itemPic]);

  const loggedIn = sessionStorage.getItem("token");
  // console.log(loggedIn);
  // console.log(recipeData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {itemName,itemDesc,itemPic,itemLike,itemComment} = recipeData
    if(!itemPic || !itemName || !itemDesc){
      alert("fill the form")
    }
    else{
      const reqBody = new FormData()
      reqBody.append("itemName",itemName)
      reqBody.append("itemDesc",itemDesc)
      reqBody.append("itemPic",itemPic)
      reqBody.append("itemLike",itemLike)
      reqBody.append("itemComment",itemComment)
      if(loggedIn){

        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${loggedIn}`
        }
        console.log("ready for api call");
        try{
          const result = await addRecipeAPI(reqBody,reqHeader)
          if(result.status === 200){
            console.log(result.data);

            setRecipeData({itemName: "",
            itemDesc: "",
            itemPic: "",
            itemLike: 0,
            itemComment: []})

          }else{
            alert(result.response.data)
          }
        }
        catch(err){

        }
      }
      

      

    }

    

    // console.log('Form submitted!', recipeData);
  };



  return (
    <div >
      <div className='fixed-top'>
        <Header />
      </div>
      <div style={{ marginTop: '80px' }} className='text-center'>
        <br />
        <hr />
        <span className='text-secondary'>
          {loggedIn ? <h1 style={{overflowY:'hidden'}}><b><i>UPLOAD</i></b></h1> : <h1><b><i>Please log in to upload</i></b></h1>}
        </span>
        <hr />
      </div>

      <Row className="justify-content-center">
        {loggedIn && (
          <Col md={8} lg={8}>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <label className='p-1'>
                  <input onChange={e => setRecipeData({ ...recipeData, itemPic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                  <img src={preview?preview:"https://i.postimg.cc/c178CW0Q/images.jpg"} alt="" style={{ height: '200px' }} className='img-fluid' />
                </label>
                {!imageStatus && <div style={{ fontSize: "10px" }} className="text-danger">
                  *Upload only the following file type (jpg, jpeg, png)*
                </div>}
              </Col>
              <Col sm={8} md={8} lg={8}>
                <form  >
                  <div className="mb-3">
                    <label htmlFor="itemName" className="form-label" style={{ fontWeight: 'bold', color: '#333' }}>Item Name</label>
                    <input value={recipeData.itemName} onChange={e=>setRecipeData({...recipeData,itemName:e.target.value})} type="text" id="itemName" className='form-control w-75' placeholder='Enter item name' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="itemDescription" className="form-label" style={{ fontWeight: 'bold', color: '#333' }}>Item Description</label>
                    <textarea value={recipeData.itemDesc} onChange={e=>setRecipeData({...recipeData,itemDesc:e.target.value})} id="itemDescription" className='form-control w-75' placeholder='Enter item description'></textarea>
                  </div>
                  <div className='ms-2'>
                    <button onClick={e=>handleSubmit(e)}  className="btn btn-outline-warning">POST</button>
                  </div>
                </form>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Upload;
