import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render(props) {
    return (
      <div>
        <ul id="sidenav-1" className="sidenav sidenav-fixed">
          <li>
            <div className="score-bored">
              <h3>Kingdom <br />Hearts <br />Click</h3>
              <hr />
              <p>Score: <span className="score">{this.props.score}</span></p>
              <p>Top Score: <span className="top-score">{this.props.tscore}</span></p>
              <div className="box">
                <h5><u>Message</u>:</h5>
                <p>{this.props.msg}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
