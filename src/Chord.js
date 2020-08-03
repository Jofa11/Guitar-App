import React, { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://api.uberchord.com/v1/chords/?names=';

class Chord extends Component {
	componentDidMount() {
		const urlEnd = this.props.match.params.name;
		const url = `${baseURL}${urlEnd}`;

		axios(url)
			.then((res) => {
				let chord = res.data.map((item) => {
					return item.chordName;
				});

				let string = res.data.map((each) => {
					return each.strings;
				});

				let fingers = res.data.map((finger) => {
					return finger.fingering;
				});

				this.props.setChord(chord);
				this.props.setFingers(fingers);
				this.props.setString(string);
			})
			.catch(error => {
                alert(`There was an error: ${error}. Please reload page.`)
            });
	}

	render() {
		return (
			<div className='chordDiv'>
				<h2>Chord Name: {this.props.chord}</h2>
				<h2>Strings/Frets: {this.props.string}</h2>
				<h2>Fingers Used: {this.props.fingers}</h2>
			</div>
		);
	}
}

export default Chord;
