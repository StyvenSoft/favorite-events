import React from 'react';
import './EventList.css';
import EventItem from './EventItem/EventItem';

const EventList = props => {

    const events = props.events.map(event => {
        return <EventItem 
                    key={event._id} 
                    eventId={event._id} 
                    title={event.title}
                    userId={props.authUserId}
                    creatorId={event.creator._id} 
                />;
    });

    return (<ul className="events__list">
        {events}
    </ul>)
};

export default EventList;