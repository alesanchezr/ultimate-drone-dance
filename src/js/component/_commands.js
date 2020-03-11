export default {
	safe_takeoff: {
		value:
			"mambo.safe_takeoff(5) # the drone will take off (timeout after 5 seconds)",
		description:
			"Command the drone to take off (takes like 2 seconds to execute)",
		params: [{ name: "timeout", type: "number" }]
	},
	safe_land: {
		value: "mambo.safe_land() # the drone will land",
		description: "Command the drone to land",
		params: []
	},
	flip: {
		value: "mambo.flip(direction='left')",
		description:
			"Will make the drone flip on itself. Valid directions to flip are: front, back, right, left.",
		params: [
			{
				name: "direction",
				type: "string",
				description: "front, back, right or left"
			}
		]
	},
	turn_degrees: {
		value: "mambo.turn_degrees(180)",
		type: "number",
		description:
			"Turns the mambo in place the specified number of degrees.",
		params: [
			{
				type: "number",
				name: "degrees",
				description: "The range is -180 to 180"
			}
		]
	},
	smart_sleep: {
		value: "mambo.smart_sleep(1) # wait for 1 second",
		description:
			"<p>The drone will wait for X amount of seconds<p><p>E.g: This is how to tell the drone to wait 1 second</p><p>   smart_sleep(1)</p>",
		params: [{ name: "seconds", type: "number", description: "" }]
	},
	fly_direct: {
		value:
			"mambo.fly_direct(roll=0, pitch=50, yaw=0, vertical_movement=0, duration=1) # Going forward",
		description:
			"Allows the drone to fly in a particular direction. Each value ranges from -100 to 100. The commands are repeated for duration seconds.",
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
