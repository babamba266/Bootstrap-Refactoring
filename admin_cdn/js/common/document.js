//특수문자 검사
function characterCheck(obj){
	var regExp = /[ \{\}\[\]\/|\)^\┼<>\$&\'\"\\\(\=]/gi; 
	// 허용할 특수문자는 여기서 삭제하면 됨.
	// 지금은 띄어쓰기도 특수문자 처리됨 참고.
	if( regExp.test(obj.value) ){
		alert("!@#-_ 이외의 특수문자는 입력하실수 없습니다.");
		obj.value = obj.value.substring( 0 , obj.value.length - 30 ); // 입력한 특수문자 한자리 지움
	}
}

//한글 검사
function koCheck(obj){
	var regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; 
	if( regExp.test(obj.value) ){
		alert("영문과 숫자로만 입력해주세요");
		obj.value = obj.value.substring( 0 , obj.value.length - 30 ); // 입력한 특수문자 한자리 지움
	}
}
