const { combineRgb } = require('@companion-module/base')
module.exports = async function (self) {
	
	self.setFeedbackDefinitions({
		ChannelState: {
			name: 'Timer 1 Color',
			type: 'advanced',
			label: '',

			options: [
				{
					id: 'destination',
					type: 'static-text',
					label: 'Put this On the same button that shows Timer1 data',
					default: 5,
					min: 0,
					max: 100,
				},
			],
			default: 'true',
			callback: (feedback) => {
				switch (global.fb1) {

					case 1:
						return { color: combineRgb(255, 255, 255) }
					case 2:
						return { color: combineRgb(150, 150, 150) }
					case 3:
						return { color: combineRgb(255, 0, 0) }
					case 4:
						return { color: combineRgb(180, 255, 180) }
					case 5:
						return { color: combineRgb(100, 200, 255) }
					case 6:
						return { color: combineRgb(255, 205, 0) }
					case 7:
						return { color: combineRgb(150, 150, 255) }
					case 8:
						return { color: combineRgb(150, 50, 50) }
					case 9:
						return { color: combineRgb(0, 150, 180) }
					case 21:
						return { bgcolor: combineRgb(0, 0, 0) }
					case 22:
						return { bgcolor: combineRgb(255, 0, 0) }
					case 24:
						return { color: combineRgb(255, 255, 255), bgcolor: combineRgb(0, 0, 0) }
				}
			},
		},
		ChannelState2: {
			name: 'Timer 2 Color',
			type: 'advanced',
			label: '',

			options: [
				{
					id: 'destination',
					type: 'static-text',
					label: 'Put this On the same button that shows Timer2 data',
					default: 5,
					min: 0,
					max: 100,
				},
			],
			default: 'true',
			callback: (feedback) => {
				switch (global.fb2) {

					case 1:
						return { color: combineRgb(255, 255, 255) }
					case 2:
						return { color: combineRgb(150, 150, 150) }
					case 3:
						return { color: combineRgb(255, 0, 0) }
					case 4:
						return { color: combineRgb(180, 255, 180) }
					case 5:
						return { color: combineRgb(100, 200, 255) }
					case 6:
						return { color: combineRgb(255, 205, 0) }
					case 7:
						return { color: combineRgb(150, 150, 255) }
					case 8:
						return { color: combineRgb(150, 50, 50) }
					case 9:
						return { color: combineRgb(0, 150, 180) }
					case 21:
						return { bgcolor: combineRgb(0, 0, 0) }
					case 22:
						return { bgcolor: combineRgb(255, 0, 0) }
					case 23:
						return { color: combineRgb(150, 50, 50), bgcolor: combineRgb(200, 190, 180) }
					case 24:
						return { color: combineRgb(255, 255, 255), bgcolor: combineRgb(0, 0, 0) }
				}
			},
		},
	})
}
