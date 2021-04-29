import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Createevents(props) {
    return (
        <div className="container">
            <div className="create-event mt-5">
                <h1 className="create-title mb-5">Создание мероприятия</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Наименование мероприятия</Form.Label>
                    <Form.Control type="text" placeholder="Название мероприятия" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Срок начала мероприятия</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Срок окончания мероприятия</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Сохранить
                </Button>
                <Button className="ml-4" variant="danger" type="submit">
                    Отмена
                </Button>
            </Form>
            </div>
        </div>
    );
}

export default Createevents;