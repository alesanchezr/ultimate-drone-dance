import React, { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";

const Player = props => {
	const _player = useRef();
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	console.log("progress", progress);
	return (
		<div className="player">
			<div className="controls">
				<button
					onClick={() => {
						setPlaying(!playing);
					}}>
					{playing ? (
						<i className="fas fa-stop" />
					) : (
						<i className="fas fa-play   " />
					)}
				</button>
				<div className="song-info">
					<h3 className="song-title">Now playing: {props.title}</h3>
					<small>{Math.floor(progress.playedSeconds)} sec</small>
				</div>
			</div>
			<ReactPlayer
				{...props}
				ref={_player}
				style={{ display: "none" }}
				playing={playing}
				onProgress={val => setProgress(val)}
			/>
		</div>
	);
};

export default Player;
