import React from "react"; 
import books from "../data/history.json";
import { Container, Row } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook"

const LatestReleases = () => {
    return (
      <Container>
        <Row className="row-cols-4">
          {books.map((book) => (
            <SingleBook key={book.asin} asin={book.asin} title={book.title} img={book.img} price={book.price} />
          ))}
        </Row>
        
      </Container>
    );
  };
  
  export default LatestReleases;
  