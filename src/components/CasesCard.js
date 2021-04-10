import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import './CasesCard.css'

const Card = ({ confirmed , deaths , recovered , update , country}) => {
  if (!country && !confirmed) {
    return 'Loading...';
  }

//   console.log(confirmed , deaths , country)

  return (
    <div className='container'>
        <h2>{country}</h2>
        <p>Last Update : {update}</p>
        <div className="all_cases">
          <div className="confirmed">
            <h2>Confirmed Cases: {confirmed}</h2>
          </div>

          <div className="deaths">
            <h2>Deaths: {deaths}</h2>
          </div>

          <div className="recovered">
            <h2>Recovered Cases: {recovered}</h2>
          </div>

          
        </div>
    
    </div>
  );
};

export default Card;
