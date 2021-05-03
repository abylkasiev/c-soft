import React from 'react';

function TheEvents({event}) {
    return (
        <div>
             <div className="event-card">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-start-time">{event.startTime}</p>
                <p className="event-end-time">{event.endTime}</p>
            </div>
        </div>
    );
}

export default TheEvents;