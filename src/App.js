import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';

import { Hero } from './components/Hero/Hero';

import { About } from './components/AboutUs/About';

import { Contact } from './components/ContactUs/Contact';

import { Footer } from './components/Footer/Footer';

function App() {

  return (

    // <div className="App">

    //   <header className="App-header">

    //     <Header></Header>

    //     <img src={logo} className="App-logo" alt="logo" />

    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
          
    //     </a>
    //   </header>

    // </div>

    <div>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>


    </div>

  );
}

export default App;
