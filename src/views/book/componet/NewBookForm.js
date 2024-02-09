import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";
import { CreateBook } from "../service/BookService";

const BOOK_TYPES = [
  "Action",
  "Adventure",
  "Classics",
  "Thriller",
  "Crime",
  "Fantasy",
  "Horror",
  "Romance",
  "Mystery",
];

export default function NewBookForm({ toggle, setSuccess }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [type, setType] = useState(BOOK_TYPES[0]);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input dialog
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setBookImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (bookImage === "") {
      setIsError(true);
      setErrMsage("Book Image is required!");
      return 0;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("availableQuantity", availableQuantity);
    formData.append("file", bookImage);
    formData.append("type", type);

    try {
      const response = await CreateBook(formData);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      setSuccess(true);
    } catch (error) {
      console.error("Error creating Book:", error);

      // Access the error details
      if (error.response) {
        // The request was made, but the server responded with an error
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        setErrMsage(error.response.data.message);
      } else if (error.request) {
        setErrMsage("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrMsage("Please Try again later");
      }

      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Form onSubmit={handleSubmit}>
        {/* Alerts */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Book Created</Alert>
        ) : (
          isError && (
            <Row>
              <Col>
                <Alert color="danger"> {errMsage}</Alert>
              </Col>
            </Row>
          )
        )}

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="title">
                Title*
              </Label>
              <Input
                type="text"
                name="title"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="author">
                Author*
              </Label>
              <Input
                type="text"
                name="author"
                id="author"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="description">
                description
              </Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Gender & Date Of Birth */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="type">
                Book Type
              </Label>
              <Input
                type="select"
                name="type"
                id="type"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {BOOK_TYPES.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="price">
                Price
              </Label>
              <Input
                type="number"
                name="price"
                id="price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="availableQuantity">
                Available Quantity
              </Label>
              <Input
                type="number"
                name="availableQuantity"
                id="availableQuantity"
                required
                value={availableQuantity}
                onChange={(e) => setAvailableQuantity(e.target.value)}
              />
            </FormGroup>
          </Col>{" "}
          <Col>
            <Row>
              <Col className="d-flex align-items-center" lg="2">
                <div
                  className={
                    !bookImage && isError
                      ? "rounded border border-danger"
                      : "rounded"
                  }
                >
                  {bookImage ? (
                    <img
                      onClick={handleButtonClick}
                      alt="..."
                      className="rounded"
                      style={{ width: 55, height: 70 }}
                      src={URL.createObjectURL(bookImage)}
                    />
                  ) : (
                    <img
                      onClick={handleButtonClick}
                      alt="..."
                      className="rounded"
                      style={{ width: 60, height: 75 }}
                      src={require("../../../assets/img/book-placeholder.png")}
                    />
                  )}
                </div>
              </Col>
              <Col className="d-flex align-items-center">
                <h3
                  onClick={handleButtonClick}
                  className="ml-3 btn btn-success btn-sm"
                >
                  Add Book Photo
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="mt-5 d-flex justify-content-end">
          <Button
            className="mx-2"
            color="secondary"
            onClick={() =>
              isError || isSuccess ? window.location.reload() : toggle()
            }
          >
            Cancel
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
