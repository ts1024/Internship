
function fn_no5 (input, output){
	var len = input.length;
	if (len) {
		// m �̌v�Z
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
		
		// n�̌v�Z
		var n = len - 1;
		i = len - 1;
		while ((n > 0) && input[n] >= input[i]) {
			i--;
			if (i === 0) {
				n--;
				i = n;
			}
		}
		// ����͏��Ԓʂ�ɕ���ł���ꍇ -1 ��Ԃ�
		if (n === 0 && m === len - 1) m = n = -1;
	} else {
		// ���͂��Ȃ��ꍇ�͋󔒂�Ԃ�
		var m = "";
		var n = "";
	}
	output(m, n);
}