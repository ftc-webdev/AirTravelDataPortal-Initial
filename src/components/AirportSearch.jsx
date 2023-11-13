import { useState } from 'react'
import AirportDisplay from './AirportDisplay'

const AirportSearch = () => {

  const [code, setCode] = useState("")
  const [airport, setAirport] = useState("")

  const searchAirportsByIataCode = async (code) => {
  
    const url = 'https://airport-info.p.rapidapi.com/airport';
    const options = {
      method: 'GET',  
      headers: {
        'X-RapidAPI-Key': '43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33',
        'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(`${url}?iata=${code}`, options);
      const result = await response.json();
      setAirport(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  
  }

  const onSearch = (e) => {
    setCode(e.target.value)
    searchAirportsByIataCode(code)
  }
  
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e)
    }
  }
  
  return (
    <div className="form-control">
      <label>IATA Code</label >
      <input 
        type="text" 
        placeholder="input the airport iata code"
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={onKeyDown}
      />

      {code && <AirportDisplay airport={airport} />}

    </div>
  )
}

export default AirportSearch