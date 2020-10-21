/*global kakao*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {

    componentDidMount() {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.2871987, 127.0577896), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };
      let marker = new window.daum.maps.Marker({
          position: options.center
      });

      // 마커가 지도 위에 표시되도록 설정합니다
    
      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      marker.setMap(map);
    }

    render() {
        return (
            <div id="map" style={{width:'500px', height:'400px'}}></div>
        );
    }
}

export default App;










// import React from 'react';
// import './App.css';
// // import UsePositionDemo from './UsePositionDemo'
// // import {geolo} from 'react-geolocation'

// function App() {
//   function success(pos) {
//     const crd = pos.coords;
  
//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');
//   };

//   const geolocation = () => {
//     console.log(navigator.geolocation.getCurrentPosition(success));
//     return
//   }

//   return (
//     <div className="App">
//       <h1>다 돼 다 돼</h1>
//       {geolocation()}
//     </div>
//   );
// }

// export default App;
