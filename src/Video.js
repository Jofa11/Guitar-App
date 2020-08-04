import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
	render() {
		return (
			<div className='videoDiv'>
				<ReactPlayer
					className='player'
					width='360px'
					height='240px'
					controls
					url='https://youtu.be/pYXJy5O9j2I'
				/>
			</div>
		);
	}
}

export default Video;
