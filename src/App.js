import {useContext, useState} from 'react';
import MCUShows from "./mcu-shows/MCUShows";

const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
 ];

function App() {
//   useState [index, setIndex] = useState(0);
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} />
      <h1>Random MCU Character:</h1>
    </div>
  );
}

export default App;
