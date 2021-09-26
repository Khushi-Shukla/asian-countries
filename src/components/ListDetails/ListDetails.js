import React, { useEffect } from 'react'
import './ListDetails.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


function ListDetails({getCountriesValues, inputval}) {

    useEffect(() => {
           getCountriesValues();
          
    },[getCountriesValues]);


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
                        <Typography gutterBottom variant="h5" component="span">
                            {country.name.common}
                        </Typography>
                        <Typography component="span" variant="body2" color="text.secondary">
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

            
            <div className="list-details">
                {showCountry(inputval)}          
            
            </div>
        </div>   
        
    )
}

export default ListDetails
