import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';


import '../public/css/app.css';

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row text-center">
          <Home />
        </div>
      </div>
    </>
  )

}

export default App;
