import React from 'react';
import './App.css';
// import UsePositionDemo from './UsePositionDemo'
// import {geolo} from 'react-geolocation'

function App() {
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };

  const geolocation = () => {
    console.log(navigator.geolocation.getCurrentPosition(success));
    return
  }

  return (
    <div className="App">
      <h1>다 돼 다 돼</h1>

      {geolocation()}
    </div>
  );
}

export default App;
