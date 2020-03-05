import React, { useState } from "react";
import SplitPane from "react-split-pane";
import Editor from "./editor";
import commands from "./_commands.js";
import Player from "./player";

//include images into your bundle

//create your first component
export function Home() {
	const [_showHelp, showHelp] = useState(false);
	const [code, setCode] = useState(
		"save_takeoff(5) # this will make the drone start flying"
	);
	const [selectedCommand, setSelectedCommand] = useState(null);
	return (
		<div className="row bg-black no-gutters">
			<div className="col-12">
				<Player
					width="100%"
					height="10vh"
					title="Las tres marias"
					url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				/>
			</div>
			<div className="col-12">
				{!_showHelp ? (
					<div className="p-2 bg-dark text-white m-0 status-bar">
						<button
							className="btn btn-light btn-small float-right"
							onClick={() => showHelp(true)}>
							<i className="fas fa-question-circle" /> Help
						</button>
						<h2>Start typing your code </h2>
					</div>
				) : selectedCommand ? (
					<div className="p-3 btn-dark text-white">
						<div
							dangerouslySetInnerHTML={{
								__html: selectedCommand.description
							}}
						/>
						<button
							className="btn btn-success mt-3 w-100"
							onClick={() => {
								setCode(code + "\n" + selectedCommand.value);
								showHelp(false);
							}}>
							<i className="fas fa-plus-circle" /> Add this
							command to my code
						</button>
						<button
							className="btn btn-light mt-3  w-100"
							onClick={() => setSelectedCommand(null)}>
							<i className="fas fa-backspace" /> Back to all
							commands
						</button>
					</div>
				) : (
					<div className="help-modal p-2 text-center">
						<h2>Available commands</h2>
						<ul>
							{Object.keys(commands).map(c => (
								<li
									key={c}
									onClick={() =>
										setSelectedCommand(commands[c])
									}>
									{c}
								</li>
							))}
						</ul>
						<button
							className="btn btn-success mt-3 w-100"
							onClick={() => showHelp(false)}>
							<i className="fas fa-times-circle mr-2" />
							Close
						</button>
					</div>
				)}
				<Editor
					fontSize={20}
					value={code}
					onChange={_code => setCode(_code)}
					height="78vh"
				/>
			</div>
			<button
				className="btn form-control btn-success btn-lg btn-upload"
				onClick={() => null}>
				Submit my code
			</button>
		</div>
	);
}
