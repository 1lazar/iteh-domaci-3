import React from "react";
import CarType from "./CarType";
import Header from "./Header";
import Footer from "./Footer";

const HoneyTypes = ({carTypes}) => {
  const boja = {
    color: "black",
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <h1 className="display-5" style={boja}>
            These are the types of honey that exist:
          </h1>
        </div>
      </div>
        {carTypes.map((type) => (
            <CarType carType={type} numCarType={0} key={type.id} />
        ))}
      
      <Footer />
    </> 
  );
};

export default HoneyTypes; 