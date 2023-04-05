import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Banner';
import CardSlider from './CardSlider';
import Data from './Data';


function App() {
 
  return (
    <div className="App">    
      <Header />
      <CardSlider />
      <Data />
      <br></br>
    </div>
  );
}

export default App;
