import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarType from "./CarType";

const Origin = ({
  carNemacka,
  carItalija,
  carFrancuska,
  origin,
  changeOrigin,
}) => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bd-highlight mb-2">
        <div className="p-2 bd-highlight">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio1"
              autoComplete="off"
              checked=""
              onChange={() => changeOrigin("Nemacka")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio1">
              Nemacka
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio2"
              autoComplete="off"
              onChange={() => changeOrigin("Italija")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio2">
              Italija
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnGroupRadio"
              id="btnRadio3"
              autoComplete="off"
              onChange={() => changeOrigin("Francuska")}
            ></input>
            <label className="btn btn-outline-primary" htmlFor="btnRadio3">
              Francuska
            </label>
          </div>
        </div>
      </div>
      <div>&nbsp;</div>
      {origin === "Nemacka" ? (
        <>
          {carNemacka.map((type) => (
            <CarType carType={type} numCarType={1} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      {origin === "Italija" ? (
        <>
          {carItalija.map((type) => (
            <CarType carType={type} numCarType={1} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      {origin === "Francuska" ? (
        <>
          {carFrancuska.map((type) => (
            <CarType carType={type} numCarType={1} key={type.id} />
          ))}
        </>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default Origin;
