import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'
function Search() {

    const postDataArray = [1, 2];
    
    const handleSearch = (value, searchBy) => {
        
        console.log(`Searching for ${value} by ${searchBy}`);
    }
  return (
    <div>
    <div className='fixed-top' >
      <Header />
      </div>
      <div  className="container mt-4">
      
        <div style={{marginTop:'80px'}}  className="row border p-3 ">
          
          <div className="col-md-3">
            <div className="input-group mb-3">
              <select className="form-select" id="searchBy">
                <option value="itemName">Item Name</option>
                <option value="userName">User Name</option>
              </select>
            </div>
          </div>

          
          <div className="col-md-9">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="searchButton"
              />
              <button
                className="btn "
                type="button"
                id="searchButton"
                onClick={() => {
                  const searchValue = document.getElementById('searchBar').value;
                  const searchBy = document.getElementById('searchBy').value;
                  handleSearch(searchValue, searchBy);
                }}
              >
                <i className="fa text-danger fa-search"></i>
              </button>
            </div>
          </div>
        </div>
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

export default Search
