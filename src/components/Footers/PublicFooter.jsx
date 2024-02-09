import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const PublicFooter = () => {
  return (
    <footer
      className="footer pt-3"
      style={{ zIndex: 1000, backgroundColor: "#a9ecd2b7" }}
    >
      <Container>
        <Row className="align-items-center justify-content-lg-between">
          <Col lg="6" className="mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <Link to="/" className="text-dark ms-1">
                Online Book Store
              </Link>
              .
            </div>
          </Col>
          <Col lg="6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <Link to="#t" className="nav-link text-sm text-muted">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link text-sm text-muted">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PublicFooter;
