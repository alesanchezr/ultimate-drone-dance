import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python";
import commands from "./_commands.js";
import {
	setCompleters,
	addCompleter
} from "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ onChange, ...rest }) => {
	useEffect(() => {
		setCompleters([]);
		addCompleter({
			getCompletions: function(editor, session, pos, prefix, callback) {
				console.log(
					"listen for commands",
					commands["smart_sleep"].description
				);
				callback(
					null,
					Object.keys(commands).map(key => ({
						value: commands[key].value || key,
						description: commands[key].description,
						docHTML: `${commands[key].description}<ul>${commands[
							key
						].params
							.map(p => `<li>${p.name}: ${p.type}</li>`)
							.join("")}</ul>`,
						caption: key,
						meta: "Dron Command",
						score: 1000
					}))
				);
			}
		});
	}, []);

	return (
		<AceEditor
			{...rest}
			mode="python"
			theme="monokai"
			width="100%"
			onChange={val => onChange(val)}
			name="UNIQUE_ID_OF_DIV"
			editorProps={{ $blockScrolling: true }}
			enableLiveAutocompletion={true}
		/>
	);
};

export default Editor;
