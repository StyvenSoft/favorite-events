import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import './App.css';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';

function App() {

  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  }

  logout = () => {
    this.setState({ token: null, userId: null })
  }

  return (
    <Router>
      <React.Fragment>
        <AuthContext.Provider value={{
          token: this.state.token,
          userId: this.state.userId,
          login: this.login,
          logout: this.logout
        }}>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth"><AuthPage /></Route>
              <Route path="/events"><EventsPage /></Route>
              <Route path="/bookings"><BookingsPage /></Route>
            </Switch>
          </main>
        </AuthContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default App;
