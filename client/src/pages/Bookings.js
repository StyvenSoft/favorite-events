import React, { Component } from 'react'
import BookingsChart from '../components/Bookings/BookingChart/BookingChart';
import BookingControls from '../components/Bookings/BookingControls/BookingControls';
import BookingList from '../components/Bookings/BookingList/BookingList';
import Spinner from '../components/Spinner/Spinner';
import AuthContext from '../context/auth-context';

class BookingsPage extends Component {
    state = {
        isLoading: false,
        bookings: [],
        outputType: 'list'
    };

    static contextType = AuthContext;

    componentDidMount() {
        this.fetchBookings();
    }

    fetchRequest = (requestBody) => {
        return fetch('https://favorite-events-api.herokuapp.com/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.context.token
            }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
    }

    fetchBookings = () => {
        this.setState({ isLoading: true });
        const requestBody = {
            query: `
                query {
                    bookings {
                    _id
                    createdAt
                    event {
                        _id
                        title
                        date
                        price
                        }
                    }
                }
            `
        };

        this.fetchRequest(requestBody).then(resData => {
            const bookings = resData.data.bookings;
            this.setState({ bookings: bookings, isLoading: false });
        })
            .catch(err => {
                console.log(err);
                this.setState({ isLoading: false });
            });
    };

    deleteBookingHandler = bookingId => {
        this.setState({ isLoading: true });
        const requestBody = {
            query: `
                mutation CancelBooking($id: ID!) {
                    cancelBooking(bookingId: $id) {
                    _id
                    title
                    }
                }
            `,
            variables: {
                id: bookingId
            }
        };

        this.fetchRequest(requestBody).then(resData => {
            this.setState(prevState => {
                const updateBookings = prevState.bookings.filter(booking => {
                    return booking._id !== bookingId;
                });
                return { bookings: updateBookings, isLoading: false };
            })
        })
            .catch(err => {
                console.log(err);
                this.setState({ isLoading: false });
            });
    }

    changeOutputTypeHandler = outputType => {
        if (outputType === 'list') {
            this.setState({ outputType: 'list' });
        } else {
            this.setState({ outputType: 'chart' });
        }
    }

    render() {
        let content = <Spinner />;

        if (!this.state.isLoading) {
            content = (
                <React.Fragment>
                    <BookingControls
                        activeOutput={this.state.outputType}
                        onChange={this.changeOutputTypeHandler}
                    />
                    <div>
                        {this.state.outputType === 'list' ? (
                            <BookingList bookings={this.state.bookings}
                                onDelete={this.deleteBookingHandler} />
                        ) : (
                                <BookingsChart bookings={this.state.bookings} />
                            )}
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

export default BookingsPage;