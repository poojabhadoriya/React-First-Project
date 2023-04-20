import React from "react";
import "./about.css";
import tableImage2 from "../../assets/images/tablesetting2.jpg";

export const About = () => {
  console.log("About Component");
  return (
    <div className="container-fluid text-center py-5 d-flex px-5 mt-4  w3-padding-64 my-md-5 ">
      <div className="row align-items-md-stretch">
        {/* <!--  --> */}

        <div className="col-md-6 col-lg-6">
          {/* <img src="../../assets/images/tablesetting2.jpg" alt="table" class="img-fluid w-100% h-100 " style={{"border-radius": "4px;"}} /></img> */}

          <img
            src={tableImage2}
            alt="table"
            class="img-fluid w-100% h-100 "
            style={{ borderRadius: "4px" }}
          />
        </div>

        <div className="col-md-6 col-lg-6 ">
          <div className="aboutus">
            <h1 className="pb-4">About Catering</h1>

            <h5 className="pb-4">Tradition since 1889</h5>

            <p className="text-lg-start px-2 w3-large">
              The Catering was founded in blabla by Mr. Smith in lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              iruredolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.We only use{" "}
              <span class="w3-light-grey">seasonal</span> ingredients.
            </p>

            <p className="text-lg-start px-2 w3-text-grey  w3-large w3-hide-medium">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod temporincididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
