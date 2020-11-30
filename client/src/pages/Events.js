import React, { Component } from 'react';
import './Events.css';
import Modal from '../components/Modal/Modal';

export default class EventsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal title="Add Event" canCancel canConfirm>
                    <p>Model Content</p>
                </Modal>
                <div className="events-control">
                    <p>Share your own Favorite Events!</p>
                    <button className="btn">Create Event</button>
                </div>
            </React.Fragment>
        )
    }
}
