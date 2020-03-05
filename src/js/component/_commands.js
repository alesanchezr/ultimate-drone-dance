export default {
	smart_sleep: {
		value: "smart_sleep(1) # wait for 1 second",
		description:
			"<p>The drone will wait for X amount of seconds<p><p>E.g: This is how to tell the drone to wait 1 second</p><p>   smart_sleep(1)</p>",
		params: [{ name: "seconds", type: "number", description: "" }]
	},
	ask_for_state_update: {
		value: "ask_for_state_update() # ask for the current state",
		description: "Get the current state of the drone",
		params: []
	},
	safe_takeoff: {
		value:
			"safe_takeoff(5) # the drone will take off (timeout after 5 seconds)",
		description:
			"Command the drone to take off (takes like 2 seconds to execute)",
		params: [{ name: "timeout", type: "number" }]
	},
	fly_direct: {
		description: "Allows the drone to fly in a particular direction",
		params: [
			{
				name: "roll",
				type: "number",
				description: ""
			},
			{
				name: "pitch",
				type: "number",
				description: ""
			},
			{
				name: "yaw",
				type: "number",
				description: ""
			},
			{
				name: "vertical_movement",
				type: "number",
				description: ""
			},
			{
				name: "duration",
				type: "number",
				description: "Number of seconds it should last. E.g: 0.5 seg"
			}
		]
	}
};
