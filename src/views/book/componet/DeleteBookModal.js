import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Alert, Row } from "reactstrap";
import { DeleteBookByID } from "../service/BookService";

export default function DeleteBookModal({ book }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await DeleteBookByID(book._id);
      console.error("res", res);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      setSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      setErrMsage(error.message);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="danger" size="sm" onClick={toggle}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="md"
      >
        <ModalHeader>
          <h2>Are you sure you want to delete this Book ?</h2>
        </ModalHeader>
        <ModalBody>
          {/* Alerts */}
          {isLoading ? (
            <Alert color="primary"> Loading . . .</Alert>
          ) : isSuccess ? (
            <Alert color="success"> Book Deleted</Alert>
          ) : (
            isError && (
              <div>
                {errMsage.map((err, index) => (
                  <Row key={index}>
                    <Alert color="danger"> {err}</Alert>
                  </Row>
                ))}
              </div>
            )
          )}
          <h4 className="text-center text-danger">{book.title}</h4>
          <div className="mt-5 d-flex justify-content-center">
            <Button
              className="mx-2"
              color="secondary"
              onClick={() =>
                isError || isSuccess ? window.location.reload() : toggle()
              }
            >
              Cancel
            </Button>
            <Button color="danger" type="button" onClick={handleSubmit}>
              Delete
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
