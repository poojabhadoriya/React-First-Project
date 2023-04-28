import React from "react";

import "./header.css";

export const Header = (props) => {


  return (
    <div className="container-fluid fixed-top ">
      <header className="d-flex flex-wrap justify-content-center py-2  border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}

          <span className="fs-4">{props.heading}</span>
        </a>

        <ul className="nav nav-pills">


        {
          props.menuItems.map((value) => (

            <li className="nav-item">

            <a
              href={value.link}
              className="btn btn-list  text-dark me-2"
              aria-current="page"
              style={{ "letter-spacing ": "2px;" }}
            >
              {value.name}
            </a>
            
          </li>
          
          ))
        }

        </ul>
      </header>
    </div>
  );
};
