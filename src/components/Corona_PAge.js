import React, {useState , useEffect} from 'react';

import { CountryPicker } from './covidtracker/components';
import { fetchData } from './covidtracker/api';

import image from './covidtracker/images/image.png';

import Card from './CasesCard'

const CoronaPage = () => {
    const [data , setData] = useState({});
    const [country , setCountry] = useState('Bahrain');
    const [confirmed , setConfirmed] = useState('')
    const [deaths , setdeaths] = useState('')
    const [recovered , setRecovered] = useState('')
    const [update , setUpdate] = useState('')
  
    useEffect(async () => {
      const data = await fetchData(country);
      
        setConfirmed(data.confirmed.value)
        setdeaths(data.deaths.value)
        setRecovered(data.recovered.value)
        setUpdate(data.lastUpdate)
        setCountry(country)
        setData({data})
    } , [])

    // console.log(data , country)
  
    const handleCountryChange = async (country) => {
      const data = await fetchData(country);
      setConfirmed(data.confirmed.value)
      setdeaths(data.deaths.value)
      setRecovered(data.recovered.value)
      setUpdate(data.lastUpdate)
      setCountry(country)
      setData({data})
    }

    // console.log(data.confirmed.value)
    return (
      <div>
        <h1>Corona Tracker</h1>
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Card confirmed={confirmed} deaths={deaths} recovered={recovered} update={update} country={country} />
      </div>
    );
}

export default CoronaPage;