import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/AboutUs/About";
import { OurMenu } from "./components/Ourmenu/Ourmenu";
import { Contact } from "./components/ContactUs/Contact";
import { Footer } from "./components/Footer/Footer";

import { DATA } from "./assets/data/data";
import { Sample } from "./components/Sample/Sample";

function App() {
  const [value, setValue] = React.useState(1);
  const [count, setCount] = React.useState(5);
  const [showHideSampleComponent, setShowHideSampleComponent] = React.useState(false);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleIncrementfive = () => {
    setCount(count + 5);
  };

  const handleDecrementfive = () => {
    setCount(count - 5);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handlerSampleComponent = () => {
    if(showHideSampleComponent === true){
      setShowHideSampleComponent(false);
    } else if (showHideSampleComponent === false){
      setShowHideSampleComponent(true);
    }
    // setShowHideSampleComponent(!showHideSampleComponent)
  }

  return (
    <div>
      <Header
        menuItems={DATA.headerNavItems}
        heading={DATA.title}
        list={DATA.items1}
      ></Header>
      <Hero abheading={DATA.bannerheading}></Hero>
      <About
        heading1={DATA.aboutheading1}
        heading2={DATA.aboutheading2}
        para={DATA.aboutpara}
      ></About>
      <OurMenu menuHead={DATA.menuItemsArray}></OurMenu>
      <Contact
        mainhead={DATA.contactmain}
        head1={DATA.contacthead1}
        head2={DATA.contacthead2}
        para={DATA.contactpara}
      ></Contact>
      <Footer heading={DATA.footerhead}></Footer>

      <div style={{ margin: "100px 20px" }}>
        <h1>{value}</h1>
        <button
          style={{ margin: 5 }}
          onClick={handleIncrement}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          style={{ margin: 5 }}
          onClick={handleDecrement}
          className="btn btn-primary"
        >
          Decrement
        </button>
      </div>

      <div style={{ margin: "100px 20px" }}>
        <h2>{count}</h2>
        <button
          style={{ margin: 5 }}
          onClick={handleIncrementfive}
          className="btn btn-primary"
        >
          IncrementBy5
        </button>
        <button
          style={{ margin: 5 }}
          onClick={handleDecrementfive}
          className="btn btn-primary"
        >
          DecrementBy5
        </button>
        <button
          style={{ margin: 5 }}
          onClick={handleReset}
          className="btn btn-primary"
        >
          Reset
        </button>
      </div>

      <div style={{ margin: "100px 20px" }}>

        <button className="btn btn-secondary" onClick={handlerSampleComponent}>
          Show / Hide Sample Component
        </button>
        {
          showHideSampleComponent && <Sample />
        }
      </div>
    </div>
  );
}

export default App;
