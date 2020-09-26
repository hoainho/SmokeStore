import React from 'react';
import Navbar from './navbar';
import Smoke from '../UIkits/smoke';
import Button from '../UIkits/buttonScr';
import Arrival from './Arrival/Arrival';
export default function App() {
  return (
    <div>
       <div className="home">
          <Navbar/>
          <Smoke/>
          <Button/>
       </div>
       <Arrival/>
    </div>
  );
}
