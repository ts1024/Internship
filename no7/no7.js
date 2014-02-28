
function fn_no7(N, K, RC, output){
    var start = new Date().getTime();
	var len = RC.length; // Kに相当
	if (N && len) {
		debug.log("RC配列：");
		debug.log(RC);
		fn_1(RC, null, null, output);
	} else {
		output("");
	}
    console.log("計算時間：" + (new Date().getTime()-start) + "ms");
}

function fn_1(RC, launchCount, _history, output){
	if (!_history) _history = [];
	if (!launchCount) launchCount = 0;
	
	if (RC.length === 0){
		// 全部破壊完了	
//		console.log("発射回数：" + launchCount);
//		console.log(_history);
		output(launchCount, _history);
		return launchCount;
	}
	// 各行・各列の隕石の数をカウント
	var res = countArray(RC);
	var array_X = res[0];
	var array_Y = res[1];
	debug.log("各行・各列の隕石の数をカウント");
	debug.log(res);
	
	
	for (var i = 0, len = array_X.length; i < len ; i++){
		if (array_X[i]) {
			var newRC = [];
			var newHistory = _history.concat([["x", i]]);
			for (var j = 0, len2 = RC.length; j < len2; j++){
				if (RC[j][0] !== i) {
					newRC.push(RC[j]);
				}
			}
			fn_1(newRC, launchCount + 1, newHistory, output);
		}
	}
	for (var i = 0, len = array_Y.length; i < len ; i++){
		if (array_Y[i]) {
			var newRC = [];
			var newHistory = _history.concat([["y", i]]);
			for (var j = 0, len2 = RC.length; j < len2; j++){
				if (RC[j][1] !== i) {
					newRC.push(RC[j]);
				}
			}
			fn_1(newRC, launchCount + 1, newHistory, output);
		}
	}
}


function countArray(RC){
	var array_X = [];
	var array_Y = [];
	for (var i = 0, len = RC.length; i < len; i++){
		var x = RC[i][0];
		var y = RC[i][1];
		array_X[x] = array_X[x] || 0;
		array_X[x]++;
		array_Y[y] = array_Y[y] || 0;
		array_Y[y]++;
	}
	return [array_X, array_Y];
}

/*
// 一番多い隕石数の行or列だけ潰していくのはNG
function fn_1_botsu(RC, launchCount, _history, output){
	if (!_history) _history = [];
	if (!launchCount) launchCount = 0;
	if (RC.length === 0){
		// 全部破壊完了	
		console.log("発射回数：" + launchCount);
		console.log(_history);
		output(launchCount, _history);
		return launchCount;
	}
	// 各行・各列の隕石の数をカウント
	var res = countArray(RC);
	var array_X = res[0];
	var array_Y = res[1];
	debug.log("各行・各列の隕石の数をカウント");
	debug.log(res);
	
	// x座標（行）の隕石の最大数とその場所を探す
	var maxX = max(array_X);
	var maxX_value = maxX[0];
	var maxX_list = maxX[1];
	debug.log("x座標（行）で一番多い隕石の数は" + maxX_value);
	debug.log("　その座標は" + maxX_list);
	
	// y座標（列）の隕石の最大数とその場所を探す
	var maxY = max(array_Y);
	var maxY_value = maxY[0];
	var maxY_list = maxY[1];
	debug.log("y座標（列）で一番多い隕石の数は" + maxY_value);
	debug.log("　その座標は" + maxY_list);
	
	// x座標（行）の隕石の最大数が多い（or一緒）
	if (maxX_value >= maxY_value) {
		debug.log("x座標（行）の隕石の最大数が多い（or一緒）");
		for (var i = 0, len = maxX_list.length; i < len ; i++){
			var newRC = [];
			var newHistory = _history.concat([["x", maxX_list[i]]]);
			for (var j = 0, len2 = RC.length; j < len2; j++){
				if (RC[j][0] !== maxX_list[i]) {
					newRC.push(RC[j]);
				}
			}
			fn_1(newRC, launchCount + 1, newHistory, output);
		}
	}
	// y座標（列）の隕石の最大数が多い（or一緒）
	if (maxY_value >= maxX_value) {
		debug.log("y座標（列）の隕石の最大数が多い（or一緒）");
		for (var i = 0, len = maxY_list.length; i < len ; i++){
			var newRC = [];
			var newHistory = _history.concat([["y", maxY_list[i]]]);
			for (var j = 0, len2 = RC.length; j < len2; j++){
				if (RC[j][1] !== maxY_list[i]) {
					newRC.push(RC[j]);
				}
			}
			fn_1(newRC, launchCount + 1, newHistory, output);
		}
	}
}
function max(array){
	var value = -1;
	var result = [];
	for (var i = 0, len = array.length; i < len; i++){
		if (array[i] > value) {
			result = [i];
			value = array[i];
		} else if (array[i] === value){
			result.push(i);
		}
	}
	return [value, result]
}
//*/

if ((!typeof window.console !== "undefined" && console.log)) {
	window.console = window.console || {log:function(){}};
}
window.debug = {
	log: function (arg){
		this.isDebug && console.log(arg);
	},
	isDebug: 0
}