import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Form.Text className="text-muted fs-2 position-absolute mt-4 start-50 translate-middle">
                Авторизация
            </Form.Text>
            <Form className="mt-5 ml-5 mr-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3">
                    Submit
                </Button>
            </Form>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;