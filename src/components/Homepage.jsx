import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
  const boja = {
    color: "rgb(26, 26, 26)",
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <h1 className="display-2" style={boja}>
            Welcome to CarInfo!
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <img
            src={require("../img/main.jpg")}
            className="img-thumbnail"
            alt="img-thumbnail"
          ></img>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <Footer />
    </>
  );
}

export default Homepage;
