import React from "react";
import ReactDom from "react-dom";
import "./modal.css";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div onClick={props.closeModal} className="overlays">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-container"
        tabindex="-1"
      >
        <div className="modal-header">
          <p className="title h1 text-dark" style={{ backgroundColor: "#888", borderRadius:"5px", padding: "0px 2px" }}>
            Announcement
          </p>
          <p className="close" onClick={props.closeModal}>
            &times;
          </p>
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. 
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="https://code.visualstudio.com/docs/editor/emmet"
            target="_blank"
            rel="noreferrer"
            class="btn btn-success"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Primary link
          </a>
          <button class="btn btn-danger" onClick={props.closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
