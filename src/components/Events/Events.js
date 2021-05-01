import React from 'react';
import './Events.css'
import {NavLink} from 'react-router-dom';
import axios from '../../api/axios-firebase';
import TheEvents from './TheEvents/TheEvents';

class Events extends React.Component {

    state = {
        results: []
    }

    componentDidMount(){
        axios.get('/events.json')
        .then(response => {
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id: key,
                    }
                )
            }
            this.setState({results:fetchedResults})
        })
    }

    render() {
        return (
            <div className="event">
                <div className="container">
                    <div className="create-event-btn">
                        <NavLink to="/Createevents" exact className="btn btn-success" >
                            Создать мероприятие
                        </NavLink>
                    </div>
                    <div className="events-section">
                        <div className="event-cards">
                            {
                                this.state.results.length > 0 ?
                                this.state.results.map(event => {
                                    return <TheEvents 
                                                key={event.id} 
                                                event={event} 
                                            />

                                }) : 
                                <h3>Нет мероприятий</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;