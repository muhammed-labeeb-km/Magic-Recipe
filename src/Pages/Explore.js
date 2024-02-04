import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'

function Explore() {

  const postDataArray = [1, 2, 3, 4,5];

  return (
    <div>
      <div className='fixed-top' >
        <Header></Header>
      </div>
      <Row className='p-5' style={{marginTop:'80px'}} >
      {postDataArray.map((i,indx)=>(      
        <Col  key={indx} className='p-3' md={3} lg={4} sm={6} ><Post i={i} /></Col>
        ))}


      </Row>
      

    </div>
  )
}

export default Explore
