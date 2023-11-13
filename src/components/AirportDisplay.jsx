import Display from './Display'

const AirportDisplay = ({ airport }) => {
  return (
    <>
      <h1>Airport Display</h1>

      <Display label="IATA" value={airport.iata} />
      <Display label="ICAO" value={airport.icao} />
      <Display label="Name" value={airport.name} />
      <Display label="Location" value={airport.location} />
      <Display label="Address" value={`${airport.street_number} ${airport.street}, ${airport.city}, ${airport.state}, ${airport.country}`} />
      <Display label="Phone" value={airport.phone} />
      <Display label="Geo" value={`${airport.latitude}, ${airport.longitude} `} />
      <label>Website</label><a href={airport.website}>{airport.website}</a>

      {/* <div>
        <label>IATA : </label>
        <span>{airport.iata}</span>
      </div>  */}

      {/* <div>
        <label>ICAO : </label>
        <span>{airport.icao}</span>
      </div>  */}


    </>
  )
}

export default AirportDisplay