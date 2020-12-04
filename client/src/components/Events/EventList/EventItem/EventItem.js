import React from 'react';
import './EventItem.css';

const EventItem = props => (
    <li key={props.eventId} className="events__list-item">
        <div>
            <h1>{props.title}</h1>
            <h2>19.90</h2>
        </div>
        <div>
            {props.userId === props.creatorId ? (
                <p>Your the owner of this event</p>
            ) : (
                <button className="btn">View details</button>
            )}
            
        </div>
    </li>
);

export default EventItem;