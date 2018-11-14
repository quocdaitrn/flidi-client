import React, { Component } from 'react';
import Banner from './partials/Banner';
import './Blank.css';

class Blank extends Component {
    render() {
        return (
            <Banner key="banner" onEnterChange={this.onEnterChange} />
        );
    }
}

export default Blank;