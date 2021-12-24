import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  const deleteHandler = () => {
    setShowModal(!showModal);
  };
  const displayModal = () => (
    <>
      <Modal onCancelHandler={deleteHandler} onConfirmHandler={deleteHandler} />
      <Backdrop onCancelHandler={deleteHandler} />
    </>
  );
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && displayModal()}
    </div>
  );
};

export default Todo;
