import React from "react";
import "./modal.css";

/**
 * Modal Component
 * @param {string} message 
 * @param {function} closeModal 
 * @returns {JS.Element} 
 */

function Modal({ message, closeModal }) {
 
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-close" onClick={() => closeModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
