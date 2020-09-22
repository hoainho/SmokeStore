import React from 'react';
import Navbar from './navbar';
import Smoke from '../UIkits/smoke';
export default function App() {
  return (
    <div>
       <div className="home">
        <Navbar/>
        <Smoke/>
       </div>
    </div>
  );
}
