import React from 'react';
import './BookingList.css';

const BookingList = props => (
    <ul className="bookings__list">
        {props.bookings.map(booking => {
            return (
                <li className="bookings__item">
                    <div className="bookings__item-data">
                        {booking.event.title} -{' '}
                        {new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                    <div className="bookings__item-actions">
                        <button className="btn">Cancel</button>
                    </div>
                </li>
            );
        })}
    </ul>
);

export default BookingList;