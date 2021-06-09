import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/welcome/Welcome';
import Best from './components/best/Best';
import Training from './components/Training/Training';
import LastDiv from './components/div-last/LastDiv';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     <Welcome/>
     <Best/>
     <Training/>
     <LastDiv/>
     <Footer/>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
