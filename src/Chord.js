import React, { Component } from 'react';
import axios from 'axios';

const baseURL = 'https://api.uberchord.com/v1/chords/';

class Chord extends Component {
    

	componentDidMount() {
        // const urlEnd = this.props.match.params.chordName;
        const urlEnd = 'A';
        const url = `${baseURL}${urlEnd}`;
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
