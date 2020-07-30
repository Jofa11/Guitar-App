import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div>
				<h1>Choose a Chord</h1>
				<div className='rootBtn'>
					<Link to='/chord/A'>
						<button>A</button>
					</Link>
					<Link to='/chord/B'>
						<button>B</button>
					</Link>
					<Link to='/chord/C'>
						<button>C</button>
					</Link>
					<Link to='/chord/D'>
						<button>D</button>
					</Link>
					<Link to='/chord/E'>
						<button>E</button>
					</Link>
					<Link to='/chord/F'>
						<button>F</button>
					</Link>
					<Link to='/chord/G'>
						<button>G</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
