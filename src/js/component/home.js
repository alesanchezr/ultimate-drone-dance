import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import Editor from "./editor";
import commands from "./_commands.js";
import Player from "./player";

//include images into your bundle

//create your first componentx
export function Home() {
	const [_showHelp, showHelp] = useState(false);
	const [code, setCode] = useState(
		"mambo.save_takeoff(5) # this will make the drone start flying"
	);
	const [selectedCommand, setSelectedCommand] = useState(null);

	const [name, setName] = useState(null);
	const [_name, setTempName] = useState("");
	if (!name)
		return (
			<div className="text-center">
				<h2>Pick a name for your script!</h2>
				<input
					type="text"
					placeholder="Choose a nickname"
					className="form-control mb-5 mt-5"
					onChange={e => setTempName(e.target.value)}
					value={_name}
				/>
				<button
					type="button"
					className="btn btn-lg btn-success w-100"
					onClick={() => setName(_name)}>
					Choose this name
				</button>
			</div>
		);
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
						<h2>Command: {selectedCommand.name}</h2>
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
										setSelectedCommand({
											name: c,
											...commands[c]
										})
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
				onClick={() => {
					if (
						confirm(
							"Are you sure you are ready to send your script?"
						)
					) {
						fetch(
							"https://assets.breatheco.de/apis/drone-challenge/scripts/" +
								name,
							{
								method: "post",
								body: code
							}
						)
							.then(resp => resp.json())
							.then(resp => alert("Your code has been sent"))
							.catch(error => alert("There has been an error"));
					}
				}}>
				Submit my code
			</button>
		</div>
	);
}
