import axios from '../../../api/axios-firebase';
import React from 'react';
import {useState} from 'react'
import { Button, Form } from 'react-bootstrap';

function Createevents(props) {
    const [event, setEvent] = useState({
        name: '',
        startTime: '',
        endTime: ''
    });

    function changeHandler(e) {
        setEvent(event => {
            return {
                ...event,
                [e.target.name]: e.target.value
            }
        })
    }

    function eventHandler(e) {
        e.preventDefault();

        const events = {
            ...event,
            [e.target.name]: e.target.value   
            
        }

        axios.post('/events.json', events)
        
        e.target.reset()
    }

    // continueHandler = () => {
    //     this.props.history.push('/Events')
    // }

    return (
        <div className="container">
            <div className="create-event mt-5">
                <h1 className="create-title mb-5">Создание мероприятия</h1>
                <Form onSubmit={eventHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Наименование мероприятия</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Название мероприятия"
                        name="name" 
                        onChange={changeHandler}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Срок начала мероприятия</Form.Label>
                        <Form.Control 
                        type="date"
                        name="startTime" 
                        onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Срок окончания мероприятия</Form.Label>
                        <Form.Control 
                        type="date"
                        name="endTime" 
                        onChange={changeHandler}
                        />
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