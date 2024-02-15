import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'
import { gettingSavedDatas } from '../services/allAPI'

function Saved() {
  
  const postDataArray = [1, 2];
  const [forSaved,setForSaved] = useState([])
  const loggedIn = sessionStorage.getItem("token")

  const gettingAllSaved = async () =>{
    try{
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader ={
          "Authorization":`Bearer ${token}`
        }
        const result = await gettingSavedDatas(reqHeader)
        if(result.status==200){
          setForSaved(result.data)
        }
    } 
  }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    gettingAllSaved()
  },[])

  return (
    <div>
    <div className='fixed-top' >
      <Header></Header>
      </div>
      <div style={{marginTop:'80px'}}  className='text-center' >
      <br />
      <hr />
      {loggedIn?<span className='fs-1 fw-bolder text-secondary' > <i> Downloaded </i> </span>:<span className='fs-1 fw-bolder text-secondary' > <i> Please Log in to access Saved sections </i> </span>}
      <hr />
      <div>


     { loggedIn && <Row className='p-5' >
      {forSaved.length>0 && forSaved.map((recipeDetails,indx)=>(      
        <Col key={indx} className='p-3' md={3} lg={4} sm={6} ><Post recipeDetails={recipeDetails} indx={indx} forSaved /></Col>
        ))}


      </Row>}

      </div>
      </div>
    </div>
  )
}

export default Saved
