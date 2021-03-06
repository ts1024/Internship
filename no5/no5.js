
function fn_no5 (input, output){
	var len = input.length;
	if (len) {
		// m の計算
		var m = 0;
		var i = 0;
		while ((m < len) && input[m] <= input[i]) {
			i++;
			if (i === len) {
				m++;
				i = m;
			}
		}
		if (m == len) m--;
		
		// nの計算
		var n = len - 1;
		i = len - 1;
		while ((n > 0) && input[n] >= input[i]) {
			i--;
			if (i === 0) {
				n--;
				i = n;
			}
		}
		// これは順番通りに並んでいる場合 -1 を返す
		if (n === 0 && m === len - 1) m = n = -1;
	} else {
		// 入力がない場合は空白を返す
		var m = "";
		var n = "";
	}
	output(m, n);
}