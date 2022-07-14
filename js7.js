/**
 * setter A
 	구구단 5단에 대한 결과값을 모두 더하여 getter로 전송
 	
   setter B
   20~40까지 함을 모두 더하여 getter로 전송
   
   
   getter 결과 A
   해당 결과값을 받아서 3으로 나누어서 최종 계산된 값을 setter a로 전송
   
   getter 결과 B
   해당 결과값을 받아서 다음 문자와 함께 setter b로 전송
   "홍길동님 최종 결제 금액은 xxx 입니다."
 */
 
 function call2(){
	var w=20;
	var tot=0;
	while(w<=40){
		tot += w;
		w++;
	}
	var rr = return2(tot);
	console.log(rr);
}