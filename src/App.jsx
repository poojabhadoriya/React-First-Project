import logo from './logo.svg';
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

      <Header heading ={DATA.title} list={DATA.items1}></Header>
      <Hero abheading = {DATA.bannerheading}></Hero>
      <About heading1 ={DATA.aboutheading1} heading2= {DATA.aboutheading2} para= {DATA.aboutpara}></About>
      <OurMenu mainhead = {DATA.menuheadingmain} head1= {DATA.menuheading1} head2 = {DATA.menuheading2}></OurMenu>
      <Contact mainhead = {DATA.contactmain} head1 = {DATA.contacthead1} head2 = {DATA.contacthead2} para = {DATA.contactpara} ></Contact>
      <Footer heading= {DATA.footerhead}></Footer>


    </div>

  );
}

export default App;
