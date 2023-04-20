import React from "react";

import "./ourmenu.css";


export const OurMenu = () =>
{
    console.log("OurMenu Componenets");
    return (

    <div className="d-flex flex-lg-row mb-3 justify-content-center text-center align-items-center flex-md-column flex-sm-column">

    <div className="px-5 col-lg-6 col-md-12 text-center">

      <h1 style={{"margin-bottom": "50px"}}>Our Menu</h1>


      <div className="menu-sec">

        <h4 className="sec">Bread Basket</h4>

         <h6 style={{"text-align ": "start ; font-weight: 100;"}} className="mb-5">Assortment of fresh baked fruit breads and muffins 5.50</h6>

      </div>

      

      <div className="menu-sec">

        <h4 className="sec">Honey Almond Granola with Fruits</h4>

       <h6 style={{"text-align " : "start; font-weight: 100;"}} className="mb-5">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00

       </h6>

      </div>

      

      <div className="menu-sec">

        <h4 className="sec">Belgian Waffle
        </h4>

         <h6 style={{"text-align " : "start; font-weight: 100;"}} className="mb-5">Vanilla flavored batter with malted flour 7.50

        </h6>

      </div>

      

      <div className="menu-sec">

        <h4 className="sec">Scrambled eggs
        </h4>

        <h6 style={{"text-align " : "start; font-weight: 100;"}} className="mb-5">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50

        </h6>

      </div>

      

      <div className="menu-sec">

        <h4 className="sec">Blueberry Pancakes
        </h4>

        <h6 style={{"text-align " : "start; font-weight: 100;"}} className="mb-5">With syrup, butter and lots of berries 8.50

        </h6>

    </div>
      
    </div>

    <div className="p-2 col-lg-6 col-md-12 text-center">

      <div className="p-2 banner1">

          <img src="../../assest/images/tablesetting1.jpg" id="menu" alt="table" className="img-fluid w-100% h-100 object-fit-md-scale" style={{"opacity ": " 0.75; border-radius: 4px; background-size: contain;"}}/>

      </div>  

    </div>
    
  </div>);
}