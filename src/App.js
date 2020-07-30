import React, { Component } from 'react';
import './App.css';
import Chord from './Chord';
import Audio from './Audio';
import Home from './Home';
import Input from './Input';
import { Route, Link } from 'react-router-dom';
class App extends Component {
	constructor() {
		super();
		this.state = {
			chord: '',
		};
	}

	setChord = (chord) => {
		this.setState({ chord: chord });
	};

	render() {
		return (
			<div className='App'>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
				<Route  exact path='/' component={Home}/>
				<Route
          exact
					path='/chord/:name'
					render={(routerProps) => {
						return (
							<Chord
								setChord={this.setChord}
								match={routerProps.match}
								chord={this.state.chord}
							/>
						);
					}}
				/>
				<Audio />
        <Input />
			</div>
		);
	}
}

export default App;
