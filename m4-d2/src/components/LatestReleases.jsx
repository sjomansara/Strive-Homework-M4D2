import React from "react"; 
import books from "../data/history.json";
import { Container, Row, Col } from "react-bootstrap";

const LatestReleases = () => {
    return (
      <Container>
        <Row className="row-cols-4">
          {books.map((book) => (
            <Col key={book.asin}>
              <div className="card mt-5 pb-3">
                <img src={book.img} className="card-img-top" alt="..." />
                <div className="mt-3 text-center">
                  <h6>{book.title}</h6>
                </div>
                <div className="mt-3 text-center">
                    <button className="btn btn-outline-dark">{book.price} €</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default LatestReleases;
  