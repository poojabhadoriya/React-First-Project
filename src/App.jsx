import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/AboutUs/About';
import { OurMenu } from './components/Ourmenu/Ourmenu';
import { Contact } from './components/ContactUs/Contact';
import { Footer } from './components/Footer/Footer';

import { DATA } from './assets/data/data';

function App() {

  console.log(DATA);

  return (
    <div>

      <Header heading={DATA.title} ></Header>

      <Hero></Hero>
      <About></About>
      <OurMenu></OurMenu>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
