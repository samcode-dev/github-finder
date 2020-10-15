import React from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <BsExclamationTriangleFill /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
