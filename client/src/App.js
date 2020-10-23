import React from 'react';
import { BrowserRouter, Redirect, Router, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingPage from './pages/Bookings';
import EventPage from './pages/Events';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Router path="/auth" componet={AuthPage} />
        <Router path="/event" componet={EventPage} />
        <Router path="/booking" componet={BookingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
