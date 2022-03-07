import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

import "./Pop.css";
const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        {/* <button type="button" onClick={onRequestClose}>
          Close this modal
        </button> */}
        <CreateForm onRequestClose={onRequestClose} />
      </div>
    </div>
  );
};

const Pop = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  // console.log(useState("hello")[1]);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <main>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}

      <button onClick={toggleModal} type="button">
        Create New User
      </button>
    </main>
  );
};

export default Pop;
