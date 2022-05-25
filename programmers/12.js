// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// function solution(n) {
//     var answer = [];
//     answer = String(n).split("")
//     answer = answer.reverse().map(el=>Number(el))
//     return answer;
// }

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// function solution(arr, divisor) {
//     var answer = [];
//     answer = arr.filter(el=>el%divisor===0).sort((a,b)=>a-b)
// 		if(answer.length===0){
//       answer.push(-1)
//     }
//     return answer;
// }
