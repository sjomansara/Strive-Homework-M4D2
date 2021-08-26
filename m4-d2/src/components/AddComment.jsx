import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
    const [commentString, setCommentString] = useState("")

    const onCommentChange = (event) => {
        setCommentString(event.target.value)
        console.log(commentString)
    }
    
    const onSubmitComment = async () => {
        
        let newComment = {
            comment: commentString,
            rate: 5,
            elementId: props.asin
        }

        try {
            console.log(props)
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
                method: "POST",
                body: JSON.stringify(newComment),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMGNkODJkNTI2MjAwMTViNmRkMTEiLCJpYXQiOjE2Mjk5ODc0MTQsImV4cCI6MTYzMTE5NzAxNH0.okFYBFiq_jLQMwu7n81wu8DH68CZ6P8ixlfjHJNQ-tc"
                }
            })

            if (response.ok) {
                const commentResponse = await response.json()
                console.log(commentResponse)
            }
        } catch (error) {
            console.error(error)
        } finally {
            console.log("Comment submitted")
        }
    }

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1" className="mt-3">
                <Form.Label>Leave a comment:</Form.Label>
                <textarea type="text" placeholder="Type here" onChange={onCommentChange}/>
                <Button variant="light" type="submit" className="mt-2 btn-outline-dark" onClick={() => onSubmitComment(props.asin)} >
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}
  
  export default AddComment;