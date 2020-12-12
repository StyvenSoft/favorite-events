import React from 'react';
import './BookingControls.css';

const BookingControls = props => {
    return (
        <div className="bookings-control">
            <button 
                className={props.activeOutput === 'list' ? 'active' : ''}
                onClick={props.onChange.bind(this, 'list')}
            >List Bookings</button>
            <button 
                className={props.activeOutput === 'chart' ? 'active' : ''}
                onClick={props.onChange.bind(this, 'chart')}
            >Charts</button>
        </div>
    )
}

export default BookingControls;