/********* no1 a) *********/
function fn_no1_a (str, output){
	if (str) {
		var charList = {};
		for (var i = 0, len = str.length; i < len; i++) {
			if (charList[str[i]]) {
				output("false");
				return;
			}
			charList[str[i]] = true;
		}
		output("true");
	} else {
		output("");
	}
}

/********* no1 b) *********/
function isSubstring(str1, str2){
	return str1.indexOf(str2) !== -1;
}

function fn_no1_b (str1, str2, output){
	if (str1 && str2) {
		output(isSubstring(str1, str2));
	} else {
		output("");
	}
}

/********* no1 c) *********/
function fn_no1_c (str1, str2, output){
	if (str1 && str2) {
		if (str1.length === str2.length) {
			output(isSubstring(str1 + str1, str2));
		} else {
			output("false");
		}
	} else {
		output("");
	}
}