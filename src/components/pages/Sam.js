import React, { Fragment } from "react";
import sam from "./sam.jpg";

const Sam = () => {
  return (
    <Fragment>
      <img
        src={sam}
        alt='dev photo'
        className='round-img'
        style={{
          width: "200px",
          margin: "auto",
          position: "absolute",
          right: "0",
          top: "100px",
        }}
      ></img>
    </Fragment>
  );
};

export default Sam;
