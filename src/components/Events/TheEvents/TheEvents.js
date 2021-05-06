import React from "react";
import { Button } from "react-bootstrap";
import "./TheEvents.css";

function TheEvents({ event, remove, collapse }) {
  return (
    <div>
      <div className="event-card">
        <h3 className="event-name">{event.name}</h3>
        <hr />
        <div className={`info-content ${event.collapse ? "show" : "less"}`}>
          <p className="info-text">{event.info}</p>
          <p className="event-time">
            Дата: {event.startTime} / {event.endTime}
          </p>
          <p className="status">Статус: {event.status}</p>
        </div>
        <Button className="btn btn-primary read-more" onClick={collapse}>
          Подробнее
        </Button>
        <Button className="btn btn-danger remove" onClick={remove}>
          Удалить
        </Button>
      </div>
    </div>
  );
}

export default TheEvents;
