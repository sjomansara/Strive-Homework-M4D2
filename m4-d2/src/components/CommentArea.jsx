import React from "react";
import { Form } from "react-bootstrap";

const CommentArea = () => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1" className="mt-3">
                <Form.Label>Leave a comment:</Form.Label>
                <Form.Control type="text" placeholder="Type here" />
            </Form.Group>
        </Form>
    )
}
  
  export default CommentArea;