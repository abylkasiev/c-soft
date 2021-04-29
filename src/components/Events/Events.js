import React from 'react';
import './Events.css'
import {NavLink} from 'react-router-dom';

function Events(props) {
    return (
        <div className="event">
            <div className="container">
                <NavLink to="/Createevents" exact className="btn btn-success" >
                Создать мероприятие
                </NavLink>
            </div>
        </div>
    );
}

export default Events;