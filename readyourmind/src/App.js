import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route}  from 'react-router-dom';
import Footer from './components/Footer';
import Readmind from './components/Readmind';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Header from './components/Header';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Readmind" element={<Readmind/>} />
          <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/ContactMe" element={<ContactMe/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
