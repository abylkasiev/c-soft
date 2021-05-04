import React from 'react';
import { Button } from 'react-bootstrap';
import './TheEvents.css'

function TheEvents({event, remove}) {
    return (
        <div>
             <div className="event-card">
                <h3 className="event-name">{event.name}</h3>
                <hr/>
                <p className="info-text">{event.info}</p>
                <p className="event-start-time">{event.startTime}</p>
                <p className="event-end-time">{event.endTime}</p>
                <Button className="btn btn-danger remove" onClick={remove}>Удалить</Button>
            </div>
        </div>
    );
}

export default TheEvents;