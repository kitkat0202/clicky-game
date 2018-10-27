import React, { Component } from 'react';
import "./Container.css";


class Contain extends Component {

    render() {
      return (
        <div className="contain">
            <div className="row">
                {this.props.children}
            </div>
        </div>
      )
    }
  }
  
export default Contain;
  