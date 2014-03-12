// microwatch
"use strict"

microtime = require('microtime')

function microwatch(isDouble) {
	self    = this
	_double = (isDouble)
	_begin  = 0
	
	self.start = function() {
		_begin = (_double) ? microtime.nowDouble()          : microtime.now()
	}

	self.now = function() {
		duration = (_double) ? microtime.nowDouble() - _begin : microtime.now() - _begin
		return duration
	}
}

module.exports = microwatch