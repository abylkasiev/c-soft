import React from 'react';
import { Button, Form } from 'react-bootstrap';

import {connect} from 'react-redux'
import {addEvent, removeEvent, } from '../../../store/actions/event-actions'

class Createevents extends React.Component {
    state = {
        events: {
            name: '',
            startTime: '',
            endTime: ''
        }
    }
    render() {
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
}

const mapStateToProps = (events) => ({events});

const mapDispatchToRpops = (dispatch) => {
    return{
        onEventsAdd: (eventName) => dispatch(addEvent(eventName)),
        onEventsRemove: (eventName) => dispatch(removeEvent(eventName))
    }
};

export default connect(mapStateToProps, mapDispatchToRpops)(Createevents);