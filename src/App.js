import logo from './logo.svg';
import './App.css';
import featureCollection from './featureCollection.json';
import {centerMedian} from '@turf/turf';

function App() {
  const center = centerMedian(featureCollection);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          center: {JSON.stringify(center)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
