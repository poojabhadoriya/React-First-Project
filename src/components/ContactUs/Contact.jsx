import React from "react";

import "./contact.css";


export const Contact = () =>
{
    console.log("Contact Componenet");
    return (

        <div className="container-fluid my-5 px-5" id="px-5">
      
          <div className="px-5">
      
          <h1 className="text-lg-start mb-5">Contact</h1>
      
          <p style= {{"font-family ": "Times New Roman, Georgia, Serif; font-size: 15px; line-height: 1.5;"}}>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      
          <p className="w3-text-blue-grey"> <b>Service, 42nd Living St, 43043 New York, NY</b> </p>
      
          <p style={{"font-family": "Times New Roman, Georgia, Serif; font-size: 15px; line-height: 1.5;"}}>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
      
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