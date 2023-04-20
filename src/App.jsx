import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';

import { Hero } from './components/Hero/Hero';

import { About } from './components/AboutUs/About';

import { OurMenu } from './components/Ourmenu/Ourmenu';

import { Contact } from './components/ContactUs/Contact';

import { Footer } from './components/Footer/Footer';

function App() {

  return (

    
    <div>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <OurMenu></OurMenu>
      <Contact></Contact>
      <Footer></Footer>


    </div>

  );
}

export default App;
