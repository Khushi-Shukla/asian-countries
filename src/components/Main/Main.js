import React, { useState } from 'react'
import Header from '../Header/Header';
import ListDetails from '../ListDetails/ListDetails';
import './Main.css'

function Main() {
 
  const [inputval, setInputVal]=useState([]);

  const getCountries=()=>{
      // GET request using fetch inside useEffect React hook
          fetch('https://restcountries.com/v3/region/asia')
              .then(response => response.json())
              .then(data => setInputVal(data));
      
  }
  const refreshCountries=()=>{
    setInputVal([]);
        setTimeout(() => {
          getCountries();
        }, 1000);
}
return (
    <div className="App">
     {/* <div><h2>Displaying the asia conuntries</h2></div> */}
     <Header refreshingData={refreshCountries} />
     <ListDetails getCountriesValues={getCountries} inputval={inputval} />

    </div>
  );
}

export default Main
