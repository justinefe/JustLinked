import React, { forwardRef, useRef, useEffect } from "react";
import "./Modal.scss";
// import React from "react";

const Modal = forwardRef(({ children, title }, ref) => {
  const closeRef = useRef();
  const handleClickClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current.style.display = "none";
  };
  useEffect(() => {
    ref.current.style.display = "none";

    const handleWindowClose = (event) => {
      if (event.target == ref.current) {
        ref.current.style.display = "none";
      }
    };
    window.addEventListener("onclick", handleWindowClose);
    return () => window.removeEventListener("onclick", handleWindowClose);
  });

  return (
    <div ref={ref} className="modal">
      <div className="modal_content">
        <div className="modal_content_top">
          {" "}
          <span>{title}</span>
          <div className="cancel">
            <span ref={closeRef} onClick={handleClickClose}>
              &times;
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
});
export default Modal;
