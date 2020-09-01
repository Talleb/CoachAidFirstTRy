import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Scoreboard from './components/Scoreboard';
import Formation from './components/Formation';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="background">
      <Router>
        <nav className="Navbar">
          <Link to="/"> Home </Link>
          <NavLink to="/match"> Matcher </NavLink>
          <NavLink to="/practice"> Träningar </NavLink>
        </nav>
        <Switch>
          <Route path="/match">
            <div className="App">
              <main>
              </main>
              <Instructions /> <Scoreboard /> <Formation />
            </div>
          </Route>
          <Route path="/practice">
            <div className="App">
              <main>
                <h1>Träningar</h1>
              </main>
            </div>
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;
