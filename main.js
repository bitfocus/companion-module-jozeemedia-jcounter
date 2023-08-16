
const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const presets = require('./presets')
const UpdateVariableDefinitions = require('./variables')
const http = require('http')
const OSC = require('osc')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
		Object.assign(this, {

			...presets

		})
	}
	async init(config) {
		this.config = config
		this.updateStatus('connecting')
		this.oscserverinit()
		this.log('debug', 'Starting definition of actions feedbacks and variables')
		this.updateActions()
		this.updateFeedbacks() 
		this.updateVariableDefinitions()
		this.updateStatus('ok')
		this.setPresets()
		global.fb1 = 1
		global.fb2 = 21
		global.fb3 = 1
		global.fb4 = 21
	}

	async destroy() {
		this.log('debug', 'destroy method started')
		this.osc.close()
		this.log('debug', 'osc closed')
		delete this.osc
		this.log('debug', 'this.osc deleted')
		this.log('debug', 'destroy')
	}


	async configUpdated(config) {
		this.config = config
		if (this.config.port != this.osc.options.localPort || this.config.host != this.osc.remoteAddress) {
			this.log('debug', 'host or port configuration changed - reloading osc server')
			this.oscserverinit()
		}
	}

	oscserverinit() {

			var self = this
			this.log('info', 'osc_server_init method started')
			if (this.osc) {
				try {

					this.osc.close()
					delete this.osc
				} catch (e) {
				}
			}
			this.osc = new OSC.UDPPort({
				localAddress: this.config.host,
				//remoteAddress: '192.168.8.161',
				localPort: this.config.feedbackPort,
				//remotePort: 7803,
				broadcast: true,
				metadata: true,
			})

		this.osc.on('ready', () => {


		})
		this.osc.on('message', (message) => this.onMessage(message))
		this.osc.on('error', (err) => {
			this.log('info', err.code)
			if (err.code == 'EADDRINUSE') {
				this.log('error', `Error: Selected feedback port ${err.message.split(':')[1]} is already in use.`)
				this.updateStatus('bad_config', 'Feedback port conflict')
			}
		})
		this.osc.open()

			this.log('info', `osc_server_init method finished ${this.osc}`)
		}
	onMessage(oscMsg) {
		//this.log('debug', oscMsg.address)
		if (oscMsg.address.startsWith('/msgonair')) {
			UpdateVariableDefinitions(this)
			this.setVariableValues({ timer2: 'MSG' })
			this.setVariableValues({ timer2s: 'MSG' })
			global.fb2 = 23
			this.checkFeedbacks('ChannelState2')
		}
		else {
			if (oscMsg.address.startsWith('/msgoffair')) {
				UpdateVariableDefinitions(this)
				this.setVariableValues({ timer2: 'TMR 2' })
				this.setVariableValues({ timer2s: 'TMR 2' })
				global.fb2 = 24
				this.checkFeedbacks('ChannelState2')
			}
			if (oscMsg.address.startsWith('/tmr1init')) {
				UpdateVariableDefinitions(this)
				this.setVariableValues({ timer1: 'TMR 1' })
				this.setVariableValues({ timer1s: 'TMR 1' })
				global.fb1 = 24
				this.checkFeedbacks('ChannelState2')
			}
		if (oscMsg.address.startsWith('/jcountrtmr1/data')) {
			UpdateVariableDefinitions(this)
			const words = oscMsg.address.substr(oscMsg.address.length - 8);
			const wordss = oscMsg.address.substr(oscMsg.address.length - 5);
			this.setVariableValues({ timer1: words })
			this.setVariableValues({ timer1s: wordss })
		}
			if (oscMsg.address.startsWith('/jcountrtmr2/data')) {
				UpdateVariableDefinitions(this)
				const words = oscMsg.address.substr(oscMsg.address.length - 8);
				const wordss = oscMsg.address.substr(oscMsg.address.length - 5);
				this.setVariableValues({ timer2: words })
				this.setVariableValues({ timer2s: wordss })

			}
		} if (oscMsg.address === ('/jcountrtmr1/colfSilver')) {
			global.fb1 = 1
			this.checkFeedbacks('ChannelState')
		}		
		if (oscMsg.address === ('/jcountrtmr1/colfGray')) {
			global.fb1 = 2
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfRed')) {
			global.fb1 = 3
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfPaleGreen')) {
			global.fb1 = 4
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfDeepSkyBlue')) {
			global.fb1 = 5
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfOrange')) {
			global.fb1 = 6
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfRoyalBlue')) {
			global.fb1 = 7
			this.checkFeedbacks('ChannelState')
		}			
		if (oscMsg.address === ('/jcountrtmr1/colfBrown')) {
			global.fb1 = 8
			this.checkFeedbacks('ChannelState')
		 }
		if (oscMsg.address === ('/jcountrtmr1/colfTeal')) {
			global.fb1 = 9
			this.checkFeedbacks('ChannelState')
		}
		if (oscMsg.address === ('/jcountrtmr1/colbBlack')) {
			global.fb1 = 21
			this.checkFeedbacks('ChannelState')
		}
		if (oscMsg.address === ('/jcountrtmr1/colbRed')) {
			global.fb1 = 22
			this.checkFeedbacks('ChannelState')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfSilver')) {
			global.fb2 = 1
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfGray')) {
			global.fb2 = 2
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfRed')) {
			global.fb2 = 3
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfPaleGreen')) {
			global.fb2 = 4
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfDeepSkyBlue')) {
			global.fb2 = 5
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfOrange')) {
			global.fb2 = 6
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfRoyalBlue')) {
			global.fb2 = 7
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfBrown')) {
			global.fb2 = 8
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colfTeal')) {
			global.fb2 = 9
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colbBlack')) {
			global.fb2 = 21
			this.checkFeedbacks('ChannelState2')
		}
		if (oscMsg.address === ('/jcountrtmr2/colbRed')) {
			global.fb2 = 22
			this.checkFeedbacks('ChannelState2')
		}
		
	}
	getConfigFields() {

		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'J-Counter IP Address',
				tooltip: 'The IP of the computer which J-Counter is running on. * 127.0.0.1 might not work',
				width: 6,
				default: '',
				regex: Regex.IP,
			},

			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port (default 7802)',
				tooltip: 'The Port Number for controlling J-Counter.',
				width: 6,
				default: 7802,
				regex: Regex.PORT,
			},
			{
				type: 'textinput',
				id: 'feedbackPort',
				label: 'Feedback Port (default 7803)',
				tooltip: 'The Port Number for receving data from J-Counter.',
				width: 6,
				default: 7803,
				regex: Regex.PORT,
			},

		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}
	updatePresets() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}


	executeAction = (action) => {
		var self = this
		var url = 'http://' + self.config.host + ':' + self.config.port

		switch (action.actionId) {
			case 'trigger_cw':
				var requestJSON = {
					action: action.options.action_dropdown,
					motions: [action.options.motion_name],
					channel: action.options.channel_dropdown,
				}
				break

			case 'set_text':
				var requestJSON = {
					action: 'set_text',
					layer: action.options.motion_name + '\\' + action.options.text_layer,
					value: action.options.text_value,
					channel: action.options.channel_dropdown,
				}
				break

			case 'activate_grid':
				var data = action.options.grid_cell.split(',')
				var cw_gridrow = parseInt(data[0])
				var cw_gridcolumn = parseInt(data[1])
				var cw_cell_array = [cw_gridrow, cw_gridcolumn]

				var requestJSON = {
					action: 'activate_grid_cell',
					grid: action.options.grid_name,
					cell: cw_cell_array,
				}
				break
		}

		var postData = JSON.stringify(requestJSON)
		var requestData = {
			host: self.config.host,
			path: '/',
			port: self.config.port,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(postData),
			},
		}

		var buffer = ''

		var req = http.request(requestData, function (res) {
			console.log(res.statusCode)
			var buffer = ''
			res.on('data', function (data) {
				buffer = buffer + data
			})
			res.on('end', function (data) {
				console.log(buffer)
			})
		})

		req.on('error', function (e) {
			console.log('Problem with request: ' + e.message)
		})

		req.write(postData)
		req.end()
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
