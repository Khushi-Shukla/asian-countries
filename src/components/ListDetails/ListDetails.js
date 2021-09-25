import React, { useState, useEffect} from 'react'
import './ListDetails.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


function ListDetails({getCountriesValues, inputval}) {
 //   const [inputval, setInputVal]=useState([]);

    // const getCountries=()=>{
    //     // GET request using fetch inside useEffect React hook
    //         fetch('https://restcountries.com/v3/region/asia')
    //             .then(response => response.json())
    //             .then(data => setInputVal(data));
        
    // }        
    

    useEffect(() => {
   //   getCountries();
   getCountriesValues();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    // const refreshCountries=()=>{
    //     setInputVal([]);
    //         setTimeout(() => {
    //           getCountries();
    //         }, 1000);
    // }

    const getBorder=(Borders)=>{
        if(!Borders){
            return <div>Not Available</div>
        }
   
        return (
            
            Borders.map((border)=>{
             return <li key={border}>{border}</li>
        })
        )
    }

    const getLang=(Languages)=>{
        if(!Languages)
        return <div>Not Available</div>
        const keys= Object.keys(Languages);
        return keys.map((key, index) => {
            return <li key={index}>{Languages[key]}</li>
        });

    }
    const showCountry=(countries)=>{
        //displaying the country in a card
        
        if(!countries.length){
            return(
            <Box className="progress" sx={{ width: '100%' }}>
                <LinearProgress /> 
            </Box>
            );
        }
        else
        return (
            
            countries.map(country =>
                <Card key={country.ccn3} className="card" sx={{ maxWidth: 345 }} >
                    <CardMedia
                       className="flag"
                       component="img"
                        image={country.flags[0]}
                        alt={country.flag}
                     />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {country.name.common}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Capital: {country.capital} <br/>
                            Region: {country.region} <br/>Sub-region: {country.subregion} <br/>
                            Borders: <div className="detail">{getBorder(country.borders)}</div>
                            Languages: <div className="detail">{getLang(country.languages)}</div>
                            Population: {country.population}Not Avaialble <br/>
                            {/* The population is not available at https://restcountries.com/v3/region/asia */}
                        </Typography>
                    </CardContent>
                </Card>
                )
                

        );
        
    }

    return (
        <div>

            <div className="button">
                {/* this button will refresh the data from the api */}
                {/* <Button variant="outlined" onClick={refreshCountries}>Refresh</Button> */}
            </div>
            <div className="list-details">
                {showCountry(inputval)}          
            
            </div>
        </div>   
        
    )
}

export default ListDetails
