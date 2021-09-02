import React from "react"
import { Form, Row, Col, Container, Button } from "react-bootstrap";

const Registration = () => (
    <>
    <h1 className="mt-5 ml-5 text-center">Register</h1>
    <Container fluid className="d-flex justify-content-center">
    <Form className="mt-5 ml-5 col-6">
    <Row>
      <Col>
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
    <Form.Group className="mt-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword" className="d-flex justify-content-center">
        <Button type='submit' variant="info">Submit</Button>
    </Form.Group>
    </Form>
    </Container>
    </>
  );
  
  export default Registration;