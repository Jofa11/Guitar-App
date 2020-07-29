import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://www.scales-chords.com/api/scales-chords-api.js';

class Chord extends Component {
	constructor() {
		super();
		this.state = {
			chord: '',
		};
	}

	componentDidMount() {
		axios(url)
			.then((res) => console.log(res))
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<h2>Hello from Chord.js</h2>
			</div>
		);
	}
}

export default Chord;
