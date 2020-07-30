import React, { Component } from 'react';
import './App.css';
import Chord from './Chord';
import Audio from './Audio';
import Home from './Home';
import Input from './Input';
import { Route } from 'react-router-dom';
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
				<h1>App.js</h1>
				<Home  exact path='/'/>
				<Route
          exact
					path='/chord'
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
