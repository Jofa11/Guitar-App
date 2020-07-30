import React, { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://api.uberchord.com/v1/chords/?names=';

class Chord extends Component {

	componentDidMount() {
        const urlEnd = this.props.match.params.name;
        const url = `${baseURL}${urlEnd},${urlEnd}_m,${urlEnd}_7`;
		axios(url)
			.then((res) => {
                console.log(res);
                let chord = res.data[0].chordName;
                console.log(chord);
                this.props.setChord(chord);
            })
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<h2>Hello from Chord.js</h2>
                <p>Chord: {this.props.chord}</p>
			</div>
		);
	}
}

export default Chord;
