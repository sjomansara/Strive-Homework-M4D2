import React, { useState } from "react"
import { Form, Row, Col, Container, Button, Alert } from "react-bootstrap";
import _ from "lodash"

const Registration = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    }

    const [userData, setUserData] = useState(initialState)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [hasEmptyFields, setHasEmptyFields] = useState(false)

    const onFormChange = (event) => {
        let stateClone = userData
        let key = event.target.id
        stateClone[key] = event.target.value
        setUserData(stateClone)
        checkIsError(userData)
        checkForEmptyFields(userData)
        console.log(userData)
    }

    const checkForEmptyFields = (userInfo) => {
        if (userInfo.firstName === initialState.firstName) {
            setHasEmptyFields(true)
        } else if (userInfo.lastName === initialState.lastName) {
            setHasEmptyFields(true)
        } else if (userInfo.email === initialState.email) {
            setHasEmptyFields(true)
        } else if (userInfo.password === initialState.password) {
            setHasEmptyFields(true)
        } else if (userInfo.passwordConfirm === initialState.passwordConfirm) {
            setHasEmptyFields(true)
        } else {
            setHasEmptyFields(false)
        }
    }

    const checkIsError = (userInfo) => {
        if (!_.isEqual(userData, initialState)) {
            if (userInfo.firstName.length < 2) {
                setIsError(true)
                setErrorMessage("First name must be at least 2 characters.")
            } else if (userInfo.lastName.length < 3 && userInfo.lastName !== "") {
                setIsError(true)
                setErrorMessage("Last name must be at least 3 characters.")
            } else if (userInfo.password !== userInfo.passwordConfirm) {
                setIsError(true)
                setErrorMessage("Password fields are not equal.")
            } else {
                setIsError(false)
            }
        } else {
            setIsError(false)
        }
    }

    return (
        <>
            <h1 className="mt-5 ml-5 text-center">Register</h1>
            {
                isError &&
                <Alert variant="danger" className="">
                    {errorMessage}
                </Alert>
            }
            <Container fluid className="d-flex justify-content-center">
                <Form className="mt-5 ml-5 col-6">
                    <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control id="firstName" placeholder="First name" required onChange={onFormChange} />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control id="lastName" onChange={onFormChange} placeholder="Last name" required />
                    </Col>
                    </Row>
                    <Form.Group className="mt-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" onChange={onFormChange} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" onChange={onFormChange} type="password" placeholder="Enter Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control id="passwordConfirm" onChange={onFormChange} type="password" placeholder="Confirm Password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword" className="d-flex justify-content-center">
                        <Button disabled={isError || hasEmptyFields} type='submit' variant="info">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
    };
  
  export default Registration;