import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ open, children, onClose }) {
  const zIndex = open ? 1000 : -1;
  const modalRef = useRef(null);

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleOutsideClick = (event) => {
    if (open && modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEscapeKey, true);
      document.addEventListener('click', handleOutsideClick, true);
    } else {
      document.removeEventListener('keydown', handleEscapeKey, true);
      document.removeEventListener('click', handleOutsideClick, true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="Overlay" />
      <div className="Modal" style={{ zIndex }} ref={modalRef} >
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}