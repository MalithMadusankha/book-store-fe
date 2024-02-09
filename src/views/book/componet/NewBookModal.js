import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewBookForm from "./NewBookForm";

export default function NewBookModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="success" size="sm" onClick={toggle}>
        New Book
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Add Book</ModalHeader>
        <ModalBody>
          <NewBookForm toggle={toggle} setSuccess={setSuccess} />
        </ModalBody>
      </Modal>
    </>
  );
}
