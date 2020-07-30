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
			string: '',
			fingers: '',
		};
	}

	setChord = (chord) => {
		this.setState({ chord: chord });
	};

	setString = (string) => {
		this.setState({ string: string });
	};

	setFingers = (fingers) => {
		this.setState({ fingers: fingers });
	};

	render() {
		return (
			<div className='App'>
				<nav>
					<Link to='/'>Home</Link>
				</nav>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/chord/:name'
					render={(routerProps) => {
						return (
							<Chord
								setChord={this.setChord}
								setString={this.setString}
								setFingers={this.setFingers}
								match={routerProps.match}
								chord={this.state.chord}
								string={this.state.string}
								fingers={this.state.fingers}
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
