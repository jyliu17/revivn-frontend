import React from "react";
import { NavLink, useHistory } from "react-router-dom";


function NavBar({setCurrentUser}) {
  const history = useHistory();

  const logout =()=> {
    setCurrentUser(null);
    history.push('/');
  }

  return (
    <div className="navbar" id="navbar">
      <span className="navbar-links">
        <header>
          <div>
            <NavLink to="/">Login</NavLink>
            <br></br>
            <NavLink to="/tickets">Tickets</NavLink>
            <br></br>
            <NavLink to="/signup">Sign Up</NavLink>
            <br></br>
            <NavLink to="/pickup">Pick Up Request</NavLink>
            <br></br>
            <button className="logout" onClick={logout}>Log Out</button>
          </div>
        </header>
      </span>
    </div>
  );
}

export default NavBar;
