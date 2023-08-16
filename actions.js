
module.exports = function (self) {
	self.setActionDefinitions({

		trigger_oprations: {
			name: '1 - Timers Operations',
			options: [
				{
					type: 'dropdown',
					label: 'Choose Timer',
					id: 'timer',
					default: 1,
					choices: [
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
					],
				},
				{
					type: 'dropdown',
					label: 'Command',
					id: 'path',
					default: 'countdown',
					choices: [
						{ id: 'countdown', label: 'Count Down' },
						{ id: 'countup', label: 'Count Up' },
						{ id: 'settime', label: 'SET' },
						{ id: 'clear', label: 'CLR' },
						{ id: 'hourplusone', label: 'Plus 1 Hour' },
						{ id: 'hourminusone', label: 'Minus 1 Hour' },
						{ id: 'minplusone', label: 'Plus 1 Minute' },
						{ id: 'minplusfive', label: 'plus 5 minutes' },
						{ id: 'minplusten', label: 'plus 10 minutes' },
						{ id: 'minminusone', label: 'Minus 1 minute' },
						{ id: 'minminusfive', label: 'Minus 5 minutes' },
						{ id: 'minminusten', label: 'Minus 10 minutes' },
						{ id: 'secplusone', label: 'Plus 1 second' },
						{ id: 'secplusten', label: 'Plus 10 seconds' },
						{ id: 'secplusthirty', label: 'Plus 30 seconds' },
						{ id: 'secminusone', label: 'Minus 1 second' },
						{ id: 'secmiunsten', label: 'Minus 10 seconds' },
						{ id: 'secminusthirty', label: 'Minus 30 seconds' },
						{ id: 'addone', label: 'Add 1 minute' },
						{ id: 'addthirty', label: 'Add 30 seconds' },
						{ id: 'addhour', label: 'Clock offset Add 1 hour' },
						{ id: 'subhour', label: 'Subtract 1 hour' },
						{ id: 'clock', label: 'Clock offset Current time' },
						{ id: 'ringnow', label: 'Ring Now!' },
						{ id: 'ringend', label: 'Toggle ring when end' },
						{ id: 'remwarning', label: 'Time remaining warning' },
						{ id: 'blinkwhenend', label: 'Blink when timer ends' },
					],
				},
			],
			callback: function (action, bank) {
				let timer = action.options.timer;
				let path = action.options.path;
				let cmd = '/' + timer + path;
				self.oscSend(self.config.host, self.config.port, cmd, []);
			},
		},
		trigger_colors: {
			name: '2 - Timer Color',
			options: [
				{
					type: 'dropdown',
					label: 'Choose Timer',
					id: 'timer',
					default: 1,
					choices: [
						{ id: '1', label: '1' },
						{ id: '2', label: '2' },
					],
				},
				{
					type: 'dropdown',
					label: 'Choose Color',
					id: 'color',
					default: 'colorsilver',
					choices: [
						{ id: 'colorsilver', label: 'Silver' },
						{ id: 'colorgray', label: 'Gray' },
						{ id: 'colorred', label: 'Red' },
						{ id: 'colorgreen', label: 'Green' },
						{ id: 'colorcyan', label: 'Cyan' },
						{ id: 'colororange', label: 'Orange' },
						{ id: 'colorblue', label: 'Blue' },
						{ id: 'colorbrown', label: 'Brown' },
						{ id: 'colorteal', label: 'Teal' },
					],
				},

			],
			callback: function (action, bank) {
				let timer = action.options.timer;
				let path = action.options.color;
				let cmd = '/' + timer + path;
				self.oscSend(self.config.host, self.config.port, cmd, []);
			},
		},
		trigger_messages: {
			name: '3 - Messages',
			options: [
				{
					type: 'dropdown',
					label: 'Message Control',
					id: 'path',
					default: '2messageone',
					choices: [
						{ id: '2messageone', label: 'Show Message - 1' },
						{ id: '2messagetwo', label: 'Show Message - 2' },
						{ id: '2messagethree', label: 'Show Message - 3' },
						{ id: '2messagefour', label: 'Show Message - 4' },
						{ id: '2messagefive', label: 'Show Message - 5' },
						{ id: '2messagesix', label: 'Show Message - 6' },
						{ id: '2hidemessage', label: 'Hide messages' },
					],
				},
			],
			callback: function (action, bank) {
				let path = action.options.path;
				let cmd = '/' + path;
				self.oscSend(self.config.host, self.config.port, cmd, []);
			},
		},
				trigger_Presets: {
					name: '4 - Presets',
					options: [

						{
							type: 'dropdown',
							label: 'Presets Control',
							id: 'path',
							default: '1Preset1',
							choices: [
								{ id: '1preset1', label: 'Recall Preset 1 to Timer 1' },
								{ id: '1preset2', label: 'Recall Preset 1 to Timer 2' },
								{ id: '2preset1', label: 'Recall Preset 2 to Timer 1' },
								{ id: '2preset2', label: 'Recall Preset 2 to Timer 2' },
								{ id: '3preset1', label: 'Recall Preset 3 to Timer 1' },
								{ id: '3preset2', label: 'Recall Preset 3 to Timer 2' },
								{ id: '4preset1', label: 'Recall Preset 4 to Timer 1' },
								{ id: '4preset2', label: 'Recall Preset 4 to Timer 2' },
								{ id: '5preset1', label: 'Recall Preset 5 to Timer 1' },
								{ id: '5preset2', label: 'Recall Preset 5 to Timer 2' },
							],
						},
					],
					callback: function (action, bank) {
						let path = action.options.path;
						let cmd = '/' + path;
						self.oscSend(self.config.host, self.config.port, cmd, []);
					},
				}

			
	})
}
