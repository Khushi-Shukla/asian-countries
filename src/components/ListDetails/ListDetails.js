import React, { useState, useEffect} from 'react'
import './ListDetails.css'

function ListDetails() {

    const [nameVal, setNameVal]=useState();
    const [inputval, setInputVal]=useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://restcountries.com/v3/region/asia')
            .then(response => response.json())
            .then(data => setInputVal(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const showName=(countries)=>{
        
        return (
            countries.map(country => 
                <div>
                    <p>
                        <p>Name: {country.name.common} <br/>Capital: {country.capital} <br/>
                        Region: {country.region} <br/>Sub-region: {country.subregion} <br/>
                        Population: {country.population} <br/>
                        <img className="flag" alt={country.flag} src={country.flags[0]} />
                        <br/></p>
                    </p>
                </div>)
        );
        
    }

    return (
        <div class="list-details">
            {/* {inputval.map(h => <div>{h.name.common}</div>)} */}
          {showName(inputval)}
            {/* <button onClick={()=>setNameVal('')}>Click</button> */}
            {nameVal}
           
        </div>
    )
}

export default ListDetails
