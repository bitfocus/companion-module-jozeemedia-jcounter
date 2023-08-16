
module.exports = async function (self) {

	self.setVariableDefinitions([
		{ variableId: 'timer1', name: 'Timer 1 HH:MM:SS' },
		{ variableId: 'timer2', name: 'Timer 2 HH:MM:SS' },
		{ variableId: 'timer1s', name: 'Timer 1 MM:SS' },
		{ variableId: 'timer2s', name: 'Timer 2 MM:SS' },
	])
}
