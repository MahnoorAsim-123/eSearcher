import axios from 'axios';
import React, { useState } from 'react';
import "./App.css";
import Loader from './Components/Loader';
import Modal from './Components/Modal';
import ErrorComp from './Components/ErrorComp';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const HandleSearch = async (e) => {
    e.preventDefault();
    setIsLoader(true);
    if (inputValue === "") {
      <Modal />
      alert("Please enter something...");
      // <Modal />
      setIsLoader(false);
    } else {
      await axios.get(`https://ap.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=K9Od6OhHfWKq4zkWNrlp1nIoIUf7a4JGWvto8xJ7qOw`)
        .then((response) => {
          setSearchResult(response.data.results);
          console.log(response.data.results);
          setIsLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoader(false);
          setErr(true)
        })
    }
  }

  return (
    <>
      <div className="container text-center mt-5 mb-5">
        <h1>E-searcher</h1>
      </div>

      <form className="form-inline d-flex justify-content-center">

        <div className="form-group mx-sm-3 mb-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search here..."
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
        </div>

        {
          isLoader ? <Loader /> :
            <button onClick={HandleSearch} type="submit" className="btn btn-primary mx-2 mb-2" data-toggle="modal" data-target="#staticBackdrop">
              SEARCH
            </button>
           

           
        }

      </form>
      {
        err ? <ErrorComp/> :
        <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">

          {
            searchResult.map((val, ind) => {
              return (
                <div key={ind} className="col-lg-3 col-md-6 col-12 imgHeight mb-4 d-flex justify-content-center">
                  <img className="img-fluid img-thumbnail imgHeight" src={val.urls.small} alt="image" />
                </div>
              )
            })
          }
        </div>
      </div>
      }

     
     
    </>
  )
}

export default App
