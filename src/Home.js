import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render() {
		return (
			<div className='homeDiv'>
				<div className='fade'>
					<h1>Choose a Chord</h1>
				</div>
				<div className='rootBtn'>
					<Link to='/chord/A'>
						<button className='box'>A</button>
					</Link>
					<Link to='/chord/A_m'>
						<button className='box'>Am</button>
					</Link>
					<Link to='/chord/B'>
						<button className='box'>B</button>
					</Link>
					<Link to='/chord/B_m'>
						<button className='box'>Bm</button>
					</Link>
					<Link to='/chord/C'>
						<button className='box'>C</button>
					</Link>
					<Link to='/chord/C_m'>
						<button className='box'>Cm</button>
					</Link>
					<Link to='/chord/D'>
						<button className='box'>D</button>
					</Link>
					<Link to='/chord/D_m'>
						<button className='box'>Dm</button>
					</Link>
					<Link to='/chord/E'>
						<button className='box'>E</button>
					</Link>
					<Link to='/chord/E_m'>
						<button className='box'>Em</button>
					</Link>
					<Link to='/chord/F'>
						<button className='box'>F</button>
					</Link>
					<Link to='/chord/F_m'>
						<button className='box'>Fm</button>
					</Link>
					<Link to='/chord/G'>
						<button className='box'>G</button>
					</Link>
					<Link to='/chord/G_m'>
						<button className='box'>Gm</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;
