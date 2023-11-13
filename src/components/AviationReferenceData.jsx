import { useState } from 'react'
import { onEnterKey } from '../lib'
import Display from './Display'

const api = `https://aviation-reference-data.p.rapidapi.com/`
const headers = {
  'X-RapidAPI-Key': '43b67899b8msh628d113745d1ea3p1f3862jsn458a8944bd33',
  'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
}

const AirlineDisplay = ({ airline }) => {
  console.log(airline)
  return (
    <> 
      <h3>Airline Details</h3>
      <Display label="IATA" value={airline.iataCode} /> 
      <Display label="ICAO" value={airline.icaoCode} /> 
      <Display label="Name" value={airline.name} /> 
      <Display label="Callsign" value={airline.callSign} /> 
      <Display label="Country Code" value={airline.alpha3countryCode} /> 

    </>  

  )
}


const AirlineSearch = () => {
  
  const [code, setCode] = useState("")
  const [airline, setAirline] = useState("")

  const search = async () => {
    const url = `${api}/airline/${code}`;
    const options = {
      method: 'GET',
      headers
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setAirline(result)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Aviation Reference Data</h2>
      <h3>Airline Search</h3>
      <div className="form-control">
        <label>IATO Code : </label>
        <input type="text"
          placeholder="IATA Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={onEnterKey((e) => search())} 
        />
        <button className="btn">Go</button>

      </div>
      {code && <AirlineDisplay airline={airline} />}
    </div>
  )
}

const AirlinesSelect = ({ airlines }) => {
  return (
    <div>
      <select>
        {
          airlines.map((airline) => (
            <option value={airline.iataCode}>{airline.name}</option>

          ))
        }

      </select>
    </div>

  )
}

const AirlinesSearch = () => {

  const [name, setName] = useState("")
  const [airlines, setAirlines] = useState([])
  const [airline, setAirline] = useState("")

  const search = async () => {
    const url = `${api}airline/search?name=${name}`;
    const options = {
    method: 'GET',
    headers
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if(airlines.length === 1) {
      setAirline(airlines[0])
    } else {
      setAirlines(result)
    }
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <h3>Airlines Search</h3>
      <div className="form-control">
        <label>Name : </label>
        <input type="text"
          placeholder="Airline Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={onEnterKey((e) => search())} 
        />
        <button className="btn">Go</button>

      </div>

      { airlines.length > 1 && <AirlinesSelect airlines={airlines} /> }
      { airlines.length === 1 && <AirlineDisplay airline={airline} /> }

      {/* {name && <AirlineDisplay airline={airline} />} */}

    </>
  )
}

export { 
  AirlineSearch,
  AirlinesSearch
}