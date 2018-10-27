import React, { Component } from 'react';
import './SmallNav.css';

class SmallNav extends Component {
  render() {
    return (
        <div className="left-nav-md hide-on-med-and-up topnavcls">
            <div className="row">
                <div className="col s12 center">
                    <h5 className="small-title">Kingdom Hearts Click</h5>
                </div>
                <div className="col s12 center">
                    <div className="score-bored-small row">
                        <p className="col s6 center">Score: <span className="score">{this.props.score}</span></p>
                        <p className="col s6 center">Top Score: <span className="top-score">{this.props.tscore}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SmallNav;
