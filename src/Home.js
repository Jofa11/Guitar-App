import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <Link to='/chord'>Chords</Link>
            </div>
        );
    }
}

export default Home;