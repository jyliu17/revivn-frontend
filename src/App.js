import React, { useEffect, useState } from "react";
import PickupForm from "./import/PickupForm";
import Login from "./import/Login";
import NavBar from "./import/NavBar";
import Tickets from "./import/Tickets";
import SignupForm from "./import/SignupForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <NavBar setCurrentUser={setCurrentUser}/>
      <div className="App">
        <header className="App-header">
          <h1>Revivn Tracker</h1>
          <Switch>
            <Route path="/pickup">
              <PickupForm />
            </Route>
            <Route exact path="/">
              <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path="/tickets">
              <Tickets />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
