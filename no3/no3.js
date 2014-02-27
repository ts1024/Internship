Array.prototype.contains = function(elem) {
   for (var i in this)
   {
       if (this[i] == elem) return true;
   }
   return false;
};


var cache = [];

function kakkoConb (num, flag){
	if (num == 1) {
		cache[1] = ["()"];
	}
	if (cache[num]) return cache[num];
	for (var i = 2; i < num; i++) {
//		kakkoConb(num, true);
	}
	cache[num] = [];
	var arr_minus1 = cache[num - 1];
	for (var i = 0, len = arr_minus1.length; i < len; i++) {
		var str = arr_minus1[i];
		var newStr = [];
		for (var j = 0, len2 = str.length; j < len2; j++){
			console.log(str)
			if (str.substring(j, j + 2) === "()"){
				newStr.push(str.substring(0,j + 1) + "()" + str.substring(j + 1, len2));
			}
			if (str[j] === "(") {
				newStr.push(str.substring(0,j) + "()" + str.substring(j, len2));
			} else 
		//	console.log(newStr)
			for (var k = 0, len3 = newStr.length; k < len3; k++) {
				if (!cache[num].contains(newStr[k])) {
					cache[num].push(newStr[k]);
				}
			}
		}
	}
	return cache[num];
}