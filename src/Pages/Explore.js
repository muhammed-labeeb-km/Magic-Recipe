import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'
import { getAllRecipeDatas } from '../services/allAPI';

function Explore() {


  const [allDatas,setAllDatas]= useState([])

  const allDataForExplore = async () =>{
    try{
        const result = await getAllRecipeDatas()
        if(result.status === 200){
        setAllDatas(result.data)
        // console.log(result.data);
    }}
    catch(err){
      console.log("error in catch");
      console.log(err);
    }
  }
  useEffect(()=>{
    allDataForExplore()
  },[])

  return (
    <div>
      <div className='fixed-top' >
        <Header></Header>
      </div>
      <Row className='p-5' style={{marginTop:'80px'}} >
      {allDatas.map((recipeDetails,indx)=>(      
        <Col  key={indx} className='p-3' md={3} lg={4} sm={6} ><Post recipeDetails={recipeDetails} indx={indx} /></Col>
        ))}


      </Row>
      

    </div>
  )
}

export default Explore
