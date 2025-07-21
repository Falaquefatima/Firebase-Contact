// import React from 'react';
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div
          className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40"
          
        >
          <div className="min-h-[200px] max-w-[80%] bg-white rounded-lg p-4  relative z-50 m-auto">
            <div className="flex justify-end p-2">
              <IoClose className="text-2xl" onClick={onClose} />
            </div>
            {children}
          </div>
          {/* <div className="backdrop-blur h-screen w-screen absolute top-0 z-40" /> */}
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
