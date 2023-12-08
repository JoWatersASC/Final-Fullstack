import { Link } from "react-router-dom";
import React from "react";

class Navbar extends React.Component {
    render(){
      return (
        <nav id="nb">
          <ul id="nb-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/button">Button Project</Link></li>
            <li><Link to="/tictactoe">Tic-Tac-Toe</Link></li>
            <li><Link to="/forms">Forms Project</Link></li>
          </ul>
        </nav>
      );
  }
}

export default Navbar;
