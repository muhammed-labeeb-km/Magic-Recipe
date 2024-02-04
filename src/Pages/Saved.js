import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'
function Saved() {

  const postDataArray = [1, 2];

  return (
    <div>
    <div className='fixed-top' >
      <Header></Header>
      </div>
      <div style={{marginTop:'80px'}}  className='text-center' >
      <br />
      <hr />
      <span className='fs-1 fw-bolder text-secondary' > <i> Downloaded </i> </span>
      <hr />
      <div>


      <Row className='p-5' >
      {postDataArray.map((i,indx)=>(      
        <Col key={indx} className='p-3' md={3} lg={4} sm={6} ><Post/></Col>
        ))}


      </Row>

      </div>
      </div>
    </div>
  )
}

export default Saved
