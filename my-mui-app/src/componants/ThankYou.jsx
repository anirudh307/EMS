import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";


export default function ThankYou({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center p-4" style={{ backgroundColor: "#bfdbfe", borderRadius: "1rem" }}>
        <FaCheckCircle className="text-primary mb-2" size={40} />
        <h4 className="fw-bold">Thank you!</h4>
        <p className="text-muted">Made with Fillout, the easy way to make stunning forms</p>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}
