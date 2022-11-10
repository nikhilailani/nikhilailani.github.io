import React from 'react';

import './App.css';
import Section from './components/Section';
import Navigation from './components/Navigation';
import About from './components/About';
import Service from './components/Service';

import Contact from './components/Contact';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Section/>} />
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/skills' element={<Skill/>}/>
          <Route exact path='/resume' element={<Resume/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer />   
    </div>
  )
}
export default App;