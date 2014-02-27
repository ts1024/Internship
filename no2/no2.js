/********* no2 a) *********/
/*
使い方：
var st = new Stack();
st.empty(); // true
st.push(123); // 123, リスト:[123]
st.push(456); // 456, リスト:[456, 123]
st.size(); // 2
st.empty(); // false
st.peek(); // 456
st.size(); // 2
st.pop(); // 456, リスト:[123]
st.size(); // 1
st.peek(); // 123

*/
function Stack (){
	// javascriptでは_listはprivateでは無いですが、読みやすいので、この方法を使います。
	this._list = [];
}
Stack.prototype = {
	empty: function (){
		return this.size() === 0;
	},
	peek: function (){
		return this._list[0];
	},
	pop: function (value){
		// 配列のshift関数は配列の先頭を削除し、その値を返す
		return this._list.shift();
	},
	push: function (value){
		// 配列のunshift関数は配列の最初に追加し、追加後のリストの長さを返す
		this._list.unshift(value);
		return value;
	},
	size: function (){
		return this._list.length
	}
};

/********* no2 b) *********/
/*
使い方：
var qu = new Queue();
qu.add(123); // 123, リスト:[123]
qu.add(456); // 456, リスト:[123, 456]
qu.size(); // 2
qu.peek(); // 123
qu.size(); // 2
qu.remove(); // 123, リスト:[456]
qu.size(); // 1
qu.peek(); // 456

*/

function Queue (){
	this.st1 = new Stack();
}
Queue.prototype = {
	add: function (value){
		this.st1.push(value);
	},
	peek: function (){
		var st2 = new Stack();
		var len = this.size();
		while (len-- > 0) {
			st2.push(this.st1.peek());
		}
		return st2.peek();
	},
	remove: function (value){
		var st2 = new Stack();
		while (this.size() > 0) {
			st2.push(this.st1.pop());
		}
		var ret = st2.pop();
		while (st2.size() > 0) {
			this.st1.push(st2.pop());
		}
		return ret;
	},
	size: function (){
		return this.st1.size();
	},
	getList: function (){
		var ret = [];
		for (var i = 0, len = this.st1._list.length; i < len; i++) {
			ret.push(this.st1._list[len - 1 - i]);
		}
		return ret;
	}
};


// ↓間違えていた
/*
function Queue (){
	this._list = [];
}
Queue.prototype = {
	add: function (value){
		// 配列のpush関数は配列の最後に追加し、追加後のリストの長さを返す
		this._list.push(value);
	},
	peek: function (){
		return this._list[0];
	},
	remove: function (value){
		// 配列のshift関数は配列の先頭を削除し、その値を返す
		return this._list.shift();
	},
	size: function (){
		return this._list.length
	}
};
*/



