import React, {useState , useEffect} from 'react';

import { CountryPicker } from './covidtracker/components';
import { fetchData } from './covidtracker/api';

import image from './covidtracker/images/image.png';

import Card from './CasesCard'

const CoronaPage = () => {
    const [data , setData] = useState({});
    const [country , setCountry] = useState('');
  
    useEffect(async () => {
      const res = await fetchData();
  
      setData({res})
    } , [])
  
    const handleCountryChange = async (country) => {
      const d = await fetchData(country);
      console.log(country,d)
      setCountry(country);
      setData({d})
    }


    return (
      <div>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        {/* <Cards data={data} /> */}
        
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Card data={data} country={country} />
        {/* <Chart data={data} country={country} />  */}
      </div>
    );
}

export default CoronaPage;