import React, { useState } from "react";

export interface ModalProps {
  isOpen?: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  const { isOpen = false, title, children, onClose } = props;
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose();
  };

  return modalIsOpen ? (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-title">
          <h2>{title}</h2>
          <button className="modal-close-button" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  ) : null;
}
