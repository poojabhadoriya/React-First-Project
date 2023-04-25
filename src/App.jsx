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
<<<<<<< HEAD

  return (
=======
>>>>>>> 09ac0098680014abdc57d57f8df2123901e27a98

  return (
    <div>

<<<<<<< HEAD
      <Header heading ={DATA.title} list={DATA.items1}></Header>
      <Hero abheading = {DATA.bannerheading}></Hero>
      <About heading1 ={DATA.aboutheading1} heading2= {DATA.aboutheading2} para= {DATA.aboutpara}></About>
      <OurMenu mainhead = {DATA.menuheadingmain} head1= {DATA.menuheading1} head2 = {DATA.menuheading2}></OurMenu>
      <Contact mainhead = {DATA.contactmain} head1 = {DATA.contacthead1} head2 = {DATA.contacthead2} para = {DATA.contactpara} ></Contact>
      <Footer heading= {DATA.footerhead}></Footer>


=======
      <Header heading={DATA.title} ></Header>

      <Hero></Hero>
      <About></About>
      <OurMenu></OurMenu>
      <Contact></Contact>
      <Footer></Footer>
>>>>>>> 09ac0098680014abdc57d57f8df2123901e27a98
    </div>
  );
}

export default App;
