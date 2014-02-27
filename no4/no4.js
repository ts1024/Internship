function minus(a, b) {
	var MIN_VALUE = -2147483648; // Number.MAX_VALUE:1.7976931348623157e+308‚Í‘å‚«‚·‚¬‚é‚Ì‚Åjava‚Ìint‚Å
	var MIN_VALUE2 = -1073741824;
	var MIN_VALUE4 = -536870912;
	var MIN_VALUE8 = -268435456;
	var MAX_VALUE = 2147483647;
	if (a >= b) MIN_VALUE = 0;
	else if (a >= (b + MIN_VALUE8)) MIN_VALUE = MIN_VALUE8;
	else if (a >= (b + MIN_VALUE4)) MIN_VALUE = MIN_VALUE4;
	else if (a >= (b + MIN_VALUE2)) MIN_VALUE = MIN_VALUE2;
	for (var i = MIN_VALUE; i < MAX_VALUE; i++){
		if (a === (b + i)) return i;
	}
}

function multiply(a, b) {
	var result = 0;
	if (a < b) {
		var tmp = b;
		b = a;
		a = tmp;
	}
	for (var i = 0; i < b; i++){
		result += a;
	}
	return result;
}

function devide(a, b) {
	
}