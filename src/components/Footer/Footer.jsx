import React from "react";

import "./footer.css";


export const Footer = (props) =>
{
    console.log("Footer Component",props);

    return (<div className="container-fluid bg-footer d-flex justify-content-center align-items-center ">

    <h6>{props.heading}<a href="#" target="_blank" class="w3-hover"> w3.css</a></h6>

  </div>);
    
        
    
}