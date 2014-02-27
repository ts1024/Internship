/********* no2 a) *********/
/*
使い方：
var st = Stack();
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
	var _list = [];
	return {
		empty: function (){
			return this.size() === 0;
		},
		peek: function (){
			return _list[0];
		},
		pop: function (value){
			// 配列のshift関数は配列の先頭を削除し、その値を返す
			return _list.shift();
		},
		push: function (value){
			// 配列のunshift関数は配列の最初に追加し、追加後のリストの長さを返す
			_list.unshift(value);
			return value;
		},
		size: function (){
			return _list.length;
		},
		getList: function (){
			return _list.concat();
		}
	}
};

/********* no2 b) *********/
/*
使い方：
var qu = Queue();
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
	var _list = [];
	return {
		add: function (value){
			// 配列のpush関数は配列の最後に追加し、追加後のリストの長さを返す
			_list.push(value);
		},
		peek: function (){
			return _list[0];
		},
		remove: function (value){
			// 配列のshift関数は配列の先頭を削除し、その値を返す
			return _list.shift();
		},
		size: function (){
			return _list.length;
		},
		getList: function (){
			return _list.concat();
		}
	}
};