import React from "react";

const CarType = ({ carType , numCarType }) => {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-5 col-sm-4">
          {numCarType === 0 ? <img
            src={require("../img/h"+ carType.id +".jpg")}
            className="img-thumbnail"
            alt="img-thumbnail"
          ></img> : <img
          src={require("../img/n"+ carType.id +".jpg")}
          className="img-thumbnail"
          alt="img-thumbnail"
        ></img>}
        </div>
        <div className="col-7 col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{carType.name}</h5>
            <p className="card-text">{carType.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarType;