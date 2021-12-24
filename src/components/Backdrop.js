import React from "react";

const Backdrop = ({ onCancelHandler }) => {
  return <div className="backdrop" onClick={onCancelHandler} />;
};

export default Backdrop;
