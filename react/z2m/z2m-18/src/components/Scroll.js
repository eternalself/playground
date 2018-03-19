import React, { Component } from 'react';
import './Scroll.css';
class Scroll extends Component {
    render() {
        return (
            <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}> 
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;
