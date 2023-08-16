const { combineRgb } = require('@companion-module/base')
module.exports = {
	setPresets: function () {
		let self = this
		let presets = []

		const colorWhite = combineRgb(255, 255, 255) 
		const colorBlack = combineRgb(0, 0, 0) // black
		presets.push({
			type: 'button',
			category: 'Timer 1 Display',
			name: 'Timer 1 Display HH:MM:ASS Small',
			style: {
				text: '$(J-Counter_v2:timer1)',
				size: '18',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],

		})

		presets.push({
			type: 'button',
			category: 'Timer 1 Display',
			name: 'Timer 1 Display HH:MM:SS Big',
			style: {
				text: '$(J-Counter_v2:timer1)',
				size: '24',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],

		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Display',
			name: 'Timer 1 Display MM:SS',
			style: {
				text: '$(J-Counter_v2:timer1s)',
				size: '24',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})



		presets.push({
			type: 'button',
			category: 'Timer 2 Display',
			name: 'Timer 2 Display HH:MM:SS Small',
			style: {
				text: '$(J-Counter_v2:timer2)',
				size: '18',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState2',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],

		})

		presets.push({
			type: 'button',
			category: 'Timer 2 Display',
			name: 'Timer 2 Display HH:MM:SS Big',
			style: {
				text: '$(J-Counter_v2:timer2)',
				size: '24',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState2',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],

		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Display',
			name: 'Timer 2 Display MM:SS',
			style: {
				text: '$(J-Counter_v2:timer2s)',
				size: '24',
				color: colorWhite,
				bgcolor: colorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: '',
							options: {
								transition: 1000,
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: 'ChannelState2',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		// #endregion
		//#region Timer 1
		//TIMER 1
		///
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR1 UP',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId:'trigger_oprations' ,
							options: {
								timer: '1',
								path: 'countup',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '', 
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR1 DOWN',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'countdown',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR1 CLR',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'clear',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'Tmr1 SET',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'settime',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +1H',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'hourplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -1H',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'hourminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +1m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +5m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minplusfive',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +10m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minplusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -1m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -5m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minminusfive',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -10m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'minminusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +1s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +10s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secplusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 +30s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secplusthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -1s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -10s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secminusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 -30s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'secminusthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 add 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'addone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})

		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 add 30',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'addthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 add 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'addone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 add h',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'addhour',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 sub 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'subone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 Clock',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'clock',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 Ring!',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'ringnow',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 Ring when end',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'ringend',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 remain warning',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'remwarning',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Operations',
			name: '',
			style: {
				text: 'TMR 1 blink when end',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50, 0, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'blinkwhenend',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//

		//#endregion


		//#region Timer 2

		//TIMER 2
		///
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR2 UP',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'countup',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR2 DOWN',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'countdown',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR2 CLR',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'clear',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR2 SET',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'settime',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +1H',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'hourplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -1H',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'hourminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +1m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +5m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minplusfive',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +10m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minplusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -1m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -5m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minminusfive',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -10m',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'minminusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +1s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secplusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +10s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secplusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 +30s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secplusthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -1s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secminusone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -10s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secminusten',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 -30s',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'secminusthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 add 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'addone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})

		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 add 30',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'addthirty',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 add 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'addone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 add h',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'addhour',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 sub 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'subone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 Clock',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'clock',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 Ring!',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'ringnow',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 Ring when end',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'ringend',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 remain warning',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'remwarning',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Operations',
			name: '',
			style: {
				text: 'TMR 2 blink when end',
				size: '8',
				color: colorWhite,
				bgcolor: combineRgb(50,  50 , 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'blinkwhenend',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})


		//#endregion

		// #region Colors Tmr1

		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Silver',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 255, 255),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorsilver',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Gray',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 150, 150),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorgray',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Red',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorred',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Green',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(180, 255, 180),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorgreen',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Cyan',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(100, 200, 255),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorcyan',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Orang',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 205, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colororange',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Blue',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 150, 255),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorblue',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Brown',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 50, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorbrown',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				}, 
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 1 Colors',
			name: '',
			style: {
				text: 'TMR1 Teal',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(0, 150, 180),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '1',
								path: 'colorteal',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})














		// #endregion


		// #region Colors Tmr2

		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Silver',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 255, 255),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorsilver',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Gray',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 150, 150),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorgray',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Red',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorred',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Green',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(180, 255, 180),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorgreen',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Cyan',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(100, 200, 255),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorcyan',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Orang',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(255, 205, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colororange',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Blue',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 150, 255),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorblue',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Brown',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(150, 50, 50),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorbrown',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer 2 Colors',
			name: '',
			style: {
				text: 'TMR2 Teal',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(0, 150, 180),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_oprations',
							options: {
								timer: '2',
								path: 'colorteal',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})














		// #endregion

		// #region Colors Messages

		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messageone',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 2',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messagetwo',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 3',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messagethree',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 4',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messagefour',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 5',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messagefive',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg 6',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 180, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2messagesix',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Messages',
			name: '',
			style: {
				text: 'Msg CLR',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 200, 100),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_messages',
							options: {
								path: '2hidemessage',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//





		// #endregion


		// #region Presets
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR1 P1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '1preset1',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR1 P2',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '2preset1',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR1 P3',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '3preset1',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR1 P4',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '4preset1',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR1 P5',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '5preset1',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		//
		//
		//
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR2 P1',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '1preset2',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR2 P2',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '2preset2',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR2 P3',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '3preset2',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR2 P4',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '4preset2',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		presets.push({
			type: 'button',
			category: 'Timer Presets',
			name: '',
			style: {
				text: 'TMR2 P5',
				size: '18',
				color: colorWhite,
				bgcolor: combineRgb(200, 150, 150),
				color: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: 'trigger_Presets',
							options: {
								path: '5preset2',
							},
						},
					],
					up: []
				},
			],
			feedbacks: [
				{
					feedbackId: '',
					options: {
						option: 1,
					},
					style: {
					},
				},
			],
		})
		// #endregion
		//
		//
		//












		this.setPresetDefinitions(presets)
	},
}