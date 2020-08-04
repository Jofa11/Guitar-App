import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className='aboutDiv'>
				<h3>Welcome to the guitar chord app!</h3>
				<p>
					It is really easy to use. Just press or click the chord you would like
					to see and it will display. You will be able to see the name of the
					chord, the frets pressed/strings played, and the finger pattern you
					would want to use to play the chord. There is also an instructional
					video by Nate Savage from YouTube that is in the Video link. In it he
					demonstrates how to play many of these chords showcased in the app.
				</p>
				<ul>
					<li>
						The chord names are followed by some commas. Please disregard them.
						That is the way they are labeled on the API.
					</li>
					<li>
						The 'm' after the chord name dictates that it is a minor chord.
					</li>
					<li>
						The numbers on the 'strings/frets' line represent the frets you
						would press. An 'X' represents a string not played and '0' is an
						open string.
					</li>
					<li>
						The strings read from top down. The first number or 'X' shown is the
						low 'E'.
					</li>
					<li>
						Finger used shows the recommended fingers to use to press each fret.
						'1' is your index finger. '2' is your middle finger. '3' is the ring
						finger. '4' is your pinky.
					</li>
					<li>
						Information in this app is from Uberchord API. Their website is
						api.uberchord.com
					</li>
					<li>Have fun. Learn some new songs to strum. And rock on!</li>
				</ul>
			</div>
		);
	}
}

export default About;
