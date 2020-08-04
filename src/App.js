import React, { Component } from 'react';
import './App.css';
import Chord from './Chord';
import Video from './Video';
import Home from './Home';
import Header from './Header';
import About from './About';
import { Route } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			chord: '',
			string: '',
			fingers: '',
		};
	}
	// State managing methods
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
				<Header />
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
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
				<Route exact path='/video' component={Video} />
			</div>
		);
	}
}

export default App;
