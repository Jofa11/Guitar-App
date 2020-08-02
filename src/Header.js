import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
					<div className='navbar'>
						<h1>Guitar Chord App</h1>
						<nav>
							<Link to='/'>
								<h3>Home</h3>
							</Link>
						</nav>
					</div>
				);
    }
}

export default Header;