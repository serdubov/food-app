// import logo from './logo.svg';
// import city from './public/city.png';
import React, {useRef, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [percentX, setPercentX] = useState('-100%')
  const [percentY, setPercentY] = useState('-100%')

  const onMouseMove = (e) => {
    const {clientX, clientY, screenX, screenY, pageX, pageY} = e;
    const {clientHeight, clientWidth} = e.target;
    const targetCoords = e.target.getBoundingClientRect();
   
    const percentX = clientWidth / 100;
    const percentY = clientHeight / 100;
    const xCoord = clientX - targetCoords.left;
    const yCoord = clientY - targetCoords.top;
    setPercentX(`${xCoord / percentX}%`)
    setPercentY(`${yCoord / percentY}%`)
  }

  return (
    <div className="App">
      <div className="wrapper" onMouseMove={onMouseMove}>
        <img className="glass-blur" src={'city.jpg'} alt='images'/>     
        <div 
          style={{
            clipPath: `circle(20% at ${percentX} ${percentY})`
          }}
          className="container-mask"
        >
          <img className="glass-image" src={'city.jpg'} alt='images'/>
        </div>
      </div>
    </div>
  );
}

export default App;

