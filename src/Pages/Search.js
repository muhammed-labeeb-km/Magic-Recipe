import React, { useState } from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import { Row,Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { gettingwithItem } from '../services/allAPI'
import { gettingwithUser } from '../services/allAPI'
function Search() {

    const postDataArray = [1, 2];
  const[inputValue,setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('itemName');
    const [searchData,setSearchData] = useState({
    })

    const [filteredArray,setFilteredArray] = useState([])
    
    const handleSearch = async() => {
      setSearchData({ [selectedOption]: inputValue }
      );
        if(inputValue)
        {
          // console.log(inputValue);
        if(selectedOption=="itemName"){
          // console.log(selectedOption);
          try{
            const reqBody={
              itemName:inputValue
            }
            console.log(reqBody);

            const result = await gettingwithItem(reqBody)

            console.log(result.data);
            if(result.status == 200){
              setFilteredArray(result.data)
            }
            else{
              console.log(result.response.data);
            }

          }catch(err){
            console.log(err);
          }
        }

        else{
          try{
            // console.log(inputValue);
            const reqBody ={
              userName:inputValue
            }
            console.log(reqBody);
            const result = await gettingwithUser(reqBody)
            if(result.status == 200){
              setFilteredArray(result.data)
            }
            else{
              console.log("hmm something went wrong");
            }
          }catch(err){
            console.log(err);
          }
        }
      }
        else{
          alert("fill the input ")
        }
      
        // return newSearchData;
      
    };
    // useEffect(() => {
    //   console.log(searchData);
    // }, [searchData]);

    console.log(filteredArray);
    
  return (
    <div>
    <div className='fixed-top' >
      <Header />
      </div>
      <div  className="mt-5">
      
        <div style={{marginTop:'80px'}}  className="row border p-3 ">
          
          <div className="col-md-3">
            <div className="input-group mb-3">
              <select className="form-select" 
              id="searchBy"
              onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
              >
                
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
                id="searchBy"
                value={inputValue}
                onChange={e=>setInputValue(e.target.value)}
              />
              <button
                className="btn "
                type="button"
                id="searchButton"
                onClick={() => {
                  handleSearch();
                }}
              >
                <i className="fa text-danger fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
        <Row className='p-5' >
            {filteredArray.length>0 && filteredArray.map((recipeDetails,indx)=>(      
                <Col key={indx} className='p-3' md={3} lg={4} sm={6} ><Post recipeDetails={recipeDetails} indx={indx} /></Col>
                ))}
      </Row>
        </div>
      </div>
    </div>
  )
}

export default Search
