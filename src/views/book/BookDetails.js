import React, { useEffect, useState } from "react";
import PublicNavbar from "components/Navbars/PublicNavbar";
import PublicFooter from "components/Footers/PublicFooter";
import { Card, CardImg, CardText, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";

import { GetBookByID } from "./service/BookService";
import BuyBookModal from "./componet/BuyBookModal";

function BookDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const fetchBook = async () => {
    const books = await GetBookByID(id);
    setData(books.data.result);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <PublicNavbar />

      <Row className="my-5">
        <Col lg={2} md={1} />
        <Col>
          <Card>
            <Row>
              <Col>
                <CardImg
                  src={data.bookImage}
                  style={{ width: 400 }}
                  alt="bookImage"
                />
              </Col>
              <Col>
                <CardText className="h3">Titel : {data.title}</CardText>
                <CardText>Author : {data.author} </CardText>
                <CardText className="h4">Price : {data.price} </CardText>
                <CardText>
                  Available Quantity : {data.availableQuantity}
                </CardText>
                <CardText>Sold Quantity : {data.soldQuantity} </CardText>
                <CardText>Description : {data.description} </CardText>

                <BuyBookModal book={data} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={2} md={1} />
      </Row>

      <PublicFooter />
    </div>
  );
}

export default BookDetails;
