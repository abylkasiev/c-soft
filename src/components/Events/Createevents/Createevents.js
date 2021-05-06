import axios from "../../../api/axios-firebase";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Createevents.css";

function Createevents(props) {
  const history = useHistory();
  const [isError, setIsError] = useState(false);

  const [event, setEvent] = useState({
    name: "",
    info: "",
    startTime: "",
    status: "active",
    endTime: "",
  });

  function changeHandler(e) {
    setEvent((event) => {
      return {
        ...event,
        [e.target.name]: e.target.value,
      };
    });
  }

  function eventHandler(e) {
    e.preventDefault();

    const events = {
      ...event,
      [e.target.name]: e.target.value,
    };

    const isEmpty = Object.values(events).some((item) => item === "");
    if (isEmpty) {
      setIsError(true);
    } else {
      axios.post("/events.json", events).then(() => {
        history.push("/Events");
      });
    }

    e.target.reset();
  }

  // const continueHandler = () => {
  //   history.push("/Events");
  // };

  return (
    <div className="container">
      <div className="create-event mt-5">
        <h1 className="create-title mb-5">Создание мероприятия</h1>
        <Form onSubmit={eventHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Group className="create-event-group">
              <Form.Label>Наименование мероприятия</Form.Label>
              {isError ? (
                <span className="create-event-error-title">
                  Ошибка. Заполните ячейки!
                </span>
              ) : null}
            </Form.Group>
            <Form.Control
              type="text"
              placeholder="Название мероприятия"
              name="name"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Подробная информация</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="info"
              placeholder="Введите текст"
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
            <Form.Control type="date" name="endTime" onChange={changeHandler} />
          </Form.Group>
          <div className="d-flex justify-content-start">
            <Button variant="success" type="submit">
              Сохранить
            </Button>
            <Button className="ml-4" variant="danger" type="submit">
              Отмена
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Createevents;
