import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import './App.css';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <React.Fragment>
        <MainNavigation />
        <main>
          <Switch>
            <Redirect from="/" to="/auth" exact />
            <Route path="/auth" componet={AuthPage} />
            <Route path="/events" componet={EventsPage} />
            <Route path="/bookings" componet={BookingsPage} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
