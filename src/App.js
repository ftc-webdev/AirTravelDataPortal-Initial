import AirportSearch from './components/AirportSearch'
import { AirlineSearch, AirlinesSearch } from './components/AviationReferenceData'
function App() {
  return (
    <div className="App container">
      <header className="header">
        <h1>Air Travel Data Portal</h1>
      </header>
      <AirportSearch />
      <AirlineSearch />
      <AirlinesSearch />

    </div>
  );
}

export default App;
