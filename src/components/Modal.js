import React from "react";

const Modal = ({ onCancelHandler, onConfirmHandler }) => {
  return (
    <div className="modal">
      <p>Are you sure to delete your task!</p>
      <button className="btn btn--all" onClick={onCancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandler}>
        Delete
      </button>
    </div>
  );
};

export default Modal;
