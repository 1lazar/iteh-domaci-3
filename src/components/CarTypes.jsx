import React from "react";
import CarType from "./CarType";
import Header from "./Header";
import Footer from "./Footer";

const HoneyTypes = ({carTypes1,carTypes2, changePage, page }) => {
  const boja = {
    color: "black",
  };
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <h1 className="display-5" style={boja}>
            These are the types of cars that exist:
          </h1>
        </div>
      </div>
      {page == 1 ? (
        <>
          {carTypes1.map((type) => (
            <CarType carType={type} numCarType={0} key={type.id} />
          ))}
        </>
      ) : (
        <>
          {carTypes2.map((type) => (
            <CarType carType={type} numCarType={0} key={type.id} />
          ))}
        </>
      )}
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => changePage(1)}
              >
                1
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => changePage(2)}
              >
                2
              </button>
            </div>
          </div>
        </div>
      </div>
      &nbsp;
      {/* <Footer /> */}
    </> 
  );
};

export default HoneyTypes; 