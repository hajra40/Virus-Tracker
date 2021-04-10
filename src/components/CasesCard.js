import React from 'react';
import { Typography, Grid } from '@material-ui/core';
// import CardComponent from './Card/Card';
// import styles from './Cards.module.css';

const Card = ({ data: { confirmed, deaths , recovered , lastUpdate } , country}) => {
  if (!confirmed) {
    return 'Loading...';
  }

//   console.log(confirmed.value,  recovered.value , deaths.value , lastUpdate)

  return (
    <div className='container'>
       {/* {console.log(data.confirmed)} */}
        <h2>{country}</h2>
        <p>{lastUpdate}</p>
        {/* <div className="all_cases">
          <div className="confirmed">
            <h2>Confirmed Cases: {confirmed.value}</h2>
          </div>

          <div className="deaths">
            <h2>Deaths: {deaths.value}</h2>
          </div>

          <div className="confirmed">
            <h2>Confirmed Cases: {confirmed.value}</h2>
          </div>

          
        </div> */}
        {/* <Grid container spacing={3} justify="center">
          <div
            className={styles.infected}
            cardTitle="Infected"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <div
            className={styles.recovered}
            cardTitle="Recovered"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <div
            className={styles.deaths}
            cardTitle="Deaths"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid> */}
    </div>
  );
};

export default Card;
