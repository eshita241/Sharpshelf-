import React from 'react';
import { RxCross2 } from "react-icons/rx";


const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-0 bottom-0 left-0 backdrop-blur flex items-center justify-center z-30" onClick={onClose}>
      <div className="relative modal-content bg-[#fff] p-10 rounded-sm border-2 border-gray-950" onClick={e => e.stopPropagation()}>
        <button className="absolute p-1 top-2 right-2 bg-transparent border-none cursor-pointer" onClick={onClose}><RxCross2 size={20}/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
