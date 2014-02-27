/********* no2 a) *********/
/*
�g�����F
var st = Stack();
st.empty(); // true
st.push(123); // 123, ���X�g:[123]
st.push(456); // 456, ���X�g:[456, 123]
st.size(); // 2
st.empty(); // false
st.peek(); // 456
st.size(); // 2
st.pop(); // 456, ���X�g:[123]
st.size(); // 1
st.peek(); // 123

*/
function Stack (){
	// javascript�ł�_list��private�ł͖����ł����A�ǂ݂₷���̂ŁA���̕��@���g���܂��B
	var _list = [];
	return {
		empty: function (){
			return this.size() === 0;
		},
		peek: function (){
			return _list[0];
		},
		pop: function (value){
			// �z���shift�֐��͔z��̐擪���폜���A���̒l��Ԃ�
			return _list.shift();
		},
		push: function (value){
			// �z���unshift�֐��͔z��̍ŏ��ɒǉ����A�ǉ���̃��X�g�̒�����Ԃ�
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
�g�����F
var qu = Queue();
qu.add(123); // 123, ���X�g:[123]
qu.add(456); // 456, ���X�g:[123, 456]
qu.size(); // 2
qu.peek(); // 123
qu.size(); // 2
qu.remove(); // 123, ���X�g:[456]
qu.size(); // 1
qu.peek(); // 456

*/
function Queue (){
	var _list = [];
	return {
		add: function (value){
			// �z���push�֐��͔z��̍Ō�ɒǉ����A�ǉ���̃��X�g�̒�����Ԃ�
			_list.push(value);
		},
		peek: function (){
			return _list[0];
		},
		remove: function (value){
			// �z���shift�֐��͔z��̐擪���폜���A���̒l��Ԃ�
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