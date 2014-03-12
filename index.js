// microwatch
microtime = require('microtime')

function microwatch(isDouble) {
	_double = (isDouble)
	_begin  = 0
	
	this.start = function() {
		_begin = (_double) ? microtime.nowDouble()          : microtime.now()
	}

	this.now = function() {
		return (_double)   ? microtime.nowDouble() - _begin : microtime.now() - _begin
	}
}

module.exports = microwatch