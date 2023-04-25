import React from "react";

import "./ourmenu.css";

import tableImage2 from "../.././assets/images/tablesetting1.jpg";

export const OurMenu = (props) => {

  console.log("OurMenu Componenets", props);
  return (
    <div className="d-flex flex-lg-row mb-3 justify-content-center text-center align-items-center flex-md-column flex-sm-column px-3">
      <div className="p-2 px-5  col-lg-6 col-md-12 text-center">
        <h1 style={{ "margin-bottom": "50px" }}>{props.mainhead}</h1>

        <div className="menu-sec">
          <h4 className="sec">{props.head1}</h4>

          <h6
            style={{ textAlign : "start" , fontWeight: "100" }}
            className="mb-5">
            {props.head2}
          </h6>
        </div>

        <div className="menu-sec">
          <h4 className="sec">{props.head1}</h4>

          <h6
            style={{ textAlign : "start" , fontWeight: "100" }}
            className="mb-5"
          >
            {props.head2}
          </h6>
        </div>

        <div className="menu-sec">
          <h4 className="sec">Belgian Waffle</h4>

          <h6
            style={{ "text-align": "start", "font-weight": "100" }}
            className="mb-5"
          >
            Vanilla flavored batter with malted flour 7.50
          </h6>
        </div>

        <div className="menu-sec">
          <h4 className="sec">Scrambled eggs</h4>

          <h6
            style={{ textAlign : "start", fontWeight: "100" }}
            className="mb-5"
          >
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </h6>
        </div>

        <div className="menu-sec">
          <h4 className="sec">Blueberry Pancakes</h4>

          <h6
            style={{ textAlign : "start", fontWeight: "100" }}
            className="mb-5"
          >
            With syrup, butter and lots of berries 8.50
          </h6>
        </div>
      </div>

      <div className="p-2 px-5 col-lg-6 col-md-12 text-center">
        <div className="p-2 banner1">
          <img
            src={tableImage2}
            id="menu"
            alt="table"
            className="img-fluid w-100% h-100 object-fit-md-scale"
            style={{
              "opacity ":
                " 0.75; border-radius: 4px; background-size: contain;",
            }}
          />
        </div>
      </div>
    </div>
  );
};
