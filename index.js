var instance_skel = require('../../instance_skel');

function instance(system, id, config) {
	let self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	self.actions(); // export actions

	return self;
}

instance.prototype.CHOICES_TIMERS = [
	{id: 1, label: 'Timer 1'},
	{id: 2, label: 'Timer 2'}
];

instance.prototype.updateConfig = function(config) {
	let self = this;

	self.config = config;
};
instance.prototype.init = function() {
	let self = this;

	self.status(self.STATE_OK);
};

// Return config fields for web config
instance.prototype.config_fields = function () {
	let self = this;
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 8,
			regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'Target Port',
			default: 7802,
			width: 4,
			regex: self.REGEX_PORT
		}
	]
};

// When module gets deleted
instance.prototype.destroy = function() {
	let self = this;
	self.debug('destroy');
};

instance.prototype.actions = function(system) {
	let self = this;

	let actionsObj = {};

	actionsObj.startCountDown = {
		label: 'Start Count Down',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'countdown';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.startCountUp = {
		label: 'Start Count Up',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'countup';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.setTime = {
		label: 'Set Time',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'settime';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.clearTime = {
		label: 'Clear Time',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'clear';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusOneHour = {
		label: 'Plus 1 Hour',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'hourplusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusOneHour = {
		label: 'Minus 1 Hour',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'hourminusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusOneMinute = {
		label: 'Plus 1 Minute',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minplusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusFiveMinutes = {
		label: 'Plus 5 Minutes',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minplusfive';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusTenMinutes = {
		label: 'Plus 10 Minutes',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minplusten';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusOneMinute = {
		label: 'Minus 1 Minute',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minminusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusFiveMinutes = {
		label: 'Minus 5 Minutes',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minminusfive';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusTenMinutes = {
		label: 'Minus 10 Minutes',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'minminusten';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusOneSec = {
		label: 'Plus 1 Second',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secplusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusTenSec = {
		label: 'Plus 10 Seconds',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secplusten';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.plusThirtySec = {
		label: 'Plus 30 Seconds',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secplusthirteen';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusOneSec = {
		label: 'Minus 1 Second',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secminusone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusTenSec = {
		label: 'Minus 10 Seconds',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secminusten';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.minusThirtySec = {
		label: 'Minus 30 Seconds',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'secminusthirteen';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.addOneMinute = {
		label: 'Add 1 Minute',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'addone';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.addThirtySeconds = {
		label: 'Add 30 Seconds',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'addthirteen';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.timeNow = {
		label: 'Time Now',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'clock';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.ringNow = {
		label: 'Ring Now',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'ringnow';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	actionsObj.ringEnd = {
		label: 'Toggle Ring When End',
		options: [
			{
				type: 'dropdown',
				label: 'Timer',
				id: 'timer',
				default: 1,
				choices: self.CHOICES_TIMERS,
				tooltip: 'The timer to control'
			}
		],
		callback: function (action, bank) {
			let timer = action.options.timer;
			let path = 'ringend';
			let cmd = '/' + timer + path;
			self.oscSend(self.config.host, self.config.port, cmd, []);
		}
	}

	self.setActions(actionsObj);
}

instance_skel.extendedBy(instance);
exports = module.exports = instance;
