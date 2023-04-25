import React from "react";

import "./contact.css";


export const Contact = (props) =>
{
    console.log("Contact Componenet", props);
    return (

        <div className="container-fluid my-5 px-5" id="px-5">
      
          <div className="px-5">
      
          <h1 className="text-lg-start mb-5">{props.mainhead}</h1>
      
          <p style= {{fontFfamily : "Times New Roman, Georgia, Serif ", fontSize: "15px", lineHeight: "1.5;"}}>{props.head1}</p>
      
          <p className="w3-text-blue-grey"> <b>{props.head2}</b> </p>
      
          <p style={{"font-family": "Times New Roman, Georgia, Serif ", "font-size" : "15px", "line-height ": "1.5;"}}>{props.para}
      
          </p>
      
          </div>
          

          
      
      
          
    
      
      
       <div className="px-5">
      
        <form action="/action_page.php" target="_blank">
      
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required="" name="Name"></input></p>
        
          <p><input className="w3-input w3-padding-16" type="number" placeholder="How many people" required="" name="People"></input></p>
        
          <p><input className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required="" name="date" value="2020-11-16T20:00"></input></p>
        
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required="" name="Message"></input></p>
        
          <p><button className="w3-button w3-light-grey w3-section my-2 border" type="submit">SEND MESSAGE</button></p>
        
        </form>
      
       </div>
       </div>);
    
        
    
}