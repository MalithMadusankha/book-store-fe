import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

function BookCard({ title, author, coverImage, id }) {
  const history = useHistory();
  return (
    <Card
      className="book-card shadow-sm card-lift--hover"
      style={{
        width: 200,
        height: 370,
        backgroundColor: "#e3f1ecb7",
      }}
      onClick={() => history.push(`/book-details/${id}`)}
    >
      <CardImg
        top
        src={coverImage}
        alt={title}
        style={{ width: 200, height: 300 }}
      />
      <CardBody>
        <CardText className="mt--3" tag="h5">
          {title}
        </CardText>
        <CardText className="h6">{author}</CardText>
      </CardBody>
    </Card>
  );
}

export default BookCard;
