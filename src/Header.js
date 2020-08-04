import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
	render() {
		return (
			// Nav links
			<div className='navbar'>
				<h1>Guitar Chord App</h1>
				<nav>
					<Link to='/'>
						<h3>Home</h3>
					</Link>
					<Link to='/about'>
						<h3>About</h3>
					</Link>
					<Link to='/video'>
						<h3>Video</h3>
					</Link>
				</nav>
			</div>
		);
	}
}

export default Header;
