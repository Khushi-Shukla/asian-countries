import React, { useState, useEffect} from 'react'
import './ListDetails.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const mapping=(borders)=>{
    borders.map((border)=>{
        <div>{border}</div>
    })
}

function ListDetails() {
    const [inputval, setInputVal]=useState([]);

    const getCountries=()=>{
        // GET request using fetch inside useEffect React hook
            fetch('https://restcountries.com/v3/region/asia')
                .then(response => response.json())
                .then(data => setInputVal(data));
        
    }        
    

    useEffect(() => {
      getCountries();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const refreshCountries=()=>{
        setInputVal([]);
            setTimeout(() => {
              getCountries();
            }, 1000);
    }

    const showName=(countries)=>{
        //displaying the country in a card
        if(!countries.length){
            return(
            <Box sx={{ width: '100%' }}>
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
                            Population: {country.population} <br/>
                            Borders: 
                                <li>{country.borders}</li>
                            
                        </Typography>
                    </CardContent>
                </Card>
                )
        );
        
    }

    return (
        <div>
            <div>
                {/* this button will refresh the data from the api */}
                <Button  variant="contained" onClick={refreshCountries}>Refresh</Button>
            </div>
            <div className="list-details">
            {showName(inputval)}          
            
            </div>
        </div>
    )
}

export default ListDetails
