import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({
  children,
  isShow,
  onClose,
  size,
  className = null,
}) => {
  return (
    <Modal show={isShow} onHide={onClose} size={size} className={className}>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
