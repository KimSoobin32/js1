/*
 * 응용문제 setter, getter
 data_a["hong","park","kim","jang"] - setter(getter에 보내야 함):비 김창순
 data_b[2500,3400,1000,6200] :에이 이종혁 (나)
 data_c["S","V","S","N","N"] 실버,VIP,일반 :씨(getter역할만함)이진형
 
 kim일 경우 [결과출력]
 kim님 적립금은 1000 이며, 일반회원 입니다.
 
 결과출력은 data_a를 가지고 있는 분이 최종 출력
 
 data_b에서 출발 시 var user_id 변수 선언, user_id="jang";
 1. 에이 - user_id="jang" => 비에게 전송 (비는 해당되는 아이디 있는지 없는 지 확인)
 2. 비는 해당 값이 있는지 없는지 파악, 없을 경우"해당 사용자는 가입되지 않았습니다."
 	있을 경우 비 => 인덱스 값을 보내줘야 함
 	해당 인덱스를 받은 에이는 해당 적립급 금액을 리턴 해줌
 3. 비는 해당 값을 받음
 4. 2번에서 비에게 받은 인덱스 값을 씨에게 보냄
 	씨는 index값을 받아서 해당 배열에 회원 레벨을 리턴
 	에이는 씨에게 받은 레벨 값을 비에게 리턴하게 됨
 5. 비는 아이디, 적립금, 레벨 리턴값을 결과값처럼 출력
 	

 */
 
// var user_id="jang";
//daa(user_id);	//index 넘어옴
 
 function data_b(){
	var b = [2500,3400,1000,6200];
	var user_id="jang1";
	
	var index = daa(user_id);	//index 넘어옴
	
	var point = b[index];
	
	console.log(index);
	console.log(point);
	
	
	
	return point;	
	
}


function cc(idx){
	var data_b = [2500,3400,1000,6200];
	var w=0;
	var point;
	while(w<data_b.length){
		if(idx==w){
			point=data_b[w];
		}
		w++;
	}
	var level = vip(idx);
	return [point,level]
}

/*
 function data_b(idx){
	var b = [2500,3400,1000,6200];
	//var user_id="jang";
	
	//var index = daa(user_id);	//index 넘어옴
	
	var point = b[index];
	
	console.log(index);
	console.log(point);
	
	data_c(index);
	
	return point;	
	
}
*/