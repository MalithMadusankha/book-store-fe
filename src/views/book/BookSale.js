import React, { useEffect, useState } from "react";
import PublicNavbar from "components/Navbars/PublicNavbar";
import PublicFooter from "components/Footers/PublicFooter";
import BookCard from "./componet/BookCard";
import { Col, Row } from "reactstrap";
import { GetBooks } from "./service/BookService";

function BookSale() {
  const [data, setData] = useState([]);

  const fetchBooks = async () => {
    const books = await GetBooks();
    setData(books.data.result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <PublicNavbar />

      <Row className="book-list my-4">
        <Col lg={{ size: 10, offset: 1 }}>
          <Row>
            {data.map((book, index) => (
              <Col key={index} md={3} className="my-4">
                <BookCard
                  title={book.title}
                  author={book.author}
                  coverImage={book.bookImage}
                  id={book._id}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <PublicFooter />
    </div>
  );
}

export default BookSale;
