import React, { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://api.uberchord.com/v1/chords/?names=';
// ,${urlEnd}_7
class Chord extends Component {
	componentDidMount() {
		const urlEnd = this.props.match.params.name;
		const url = `${baseURL}${urlEnd},${urlEnd}_m`;

		axios(url)
			.then((res) => {
				// console.log(res);
				let chord = res.data.map((item) => {
					return item.chordName;
				});

				let string = res.data.map((each) => {
					return each.strings;
				});

				let fingers = res.data.map((finger) => {
					return finger.fingering;
				});

				// console.log(chord, string, fingers);
				this.props.setChord(chord);
				this.props.setFingers(fingers);
				this.props.setString(string);
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='chordDiv'>
				<h2>Hello from Chord.js</h2>
				<h4>
					Chord Names: <span className='space'>{this.props.chord}</span>
				</h4>
				<h4>
					Strings: <span className='space'>{this.props.string}</span>
				</h4>
				<h4>
					Fingering: <span className='space'>{this.props.fingers}</span>
				</h4>
			</div>
		);
	}
}

export default Chord;
