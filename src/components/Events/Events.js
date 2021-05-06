import React from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";
import axios from "../../api/axios-firebase";
import TheEvents from "./TheEvents/TheEvents";

class Events extends React.Component {
  state = {
    results: [],
  };

  handleDeleteElement = (id) => {
    axios.delete(`/events/${id}.json`).then(() => {
      this.setState((prevState) => ({
        results: prevState.results.filter((event) => event.id != id),
      }));
    });
  };

  componentDidMount() {
    axios.get("/events.json").then((response) => {
      const fetchedResults = [];
      for (let key in response.data) {
        fetchedResults.unshift({
          ...response.data[key],
          id: key,
          collapse: false,
        });
      }
      this.setState({ results: fetchedResults });
    });
  }

  collapseToggle = (id) => {
    const index = this.state.results.findIndex((item) => item.id === id);
    const results = [...this.state.results];
    const item = { ...this.state.results[index] };

    item.collapse = !item.collapse;

    results[index] = item;

    this.setState({ results });
  };

  render() {
    return (
      <div className="event">
        <div className="container">
          <div className="create-event-btn">
            <NavLink to="/Createevents" exact className="btn btn-success">
              Создать мероприятие
            </NavLink>
          </div>
          <div className="events-section">
            <div className="event-cards">
              {this.state.results.length > 0 ? (
                this.state.results.map((event) => {
                  return (
                    <TheEvents
                      key={event.id}
                      event={event}
                      remove={() => this.handleDeleteElement(event.id)}
                      collapse={() => this.collapseToggle(event.id)}
                    />
                  );
                })
              ) : (
                <h3 className="no-events-title">Нет мероприятий</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
