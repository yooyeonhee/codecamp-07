// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
//seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// function solution(seoul) {
//     var answer = '';
//     answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`
//     return answer;
// }

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
//예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

//  var answer = true;
//     if(s.length ===4 || s.length ===6){
//         for(let i=0; i<s.length; i++){
//             if(s[i].charCodeAt()>57){
//                 answer = false
//                 return answer
//             }
//             else{
//                 continue
//             }
//         }
//         return answer
//     }
//     else{
//         return false
// }


//오류 확인해봐야함
// function solution(s) {
//     if(s.length != 4 && s.length!==6){
//         return false;
//     }
//     for( let i=0; i < s.length; i++){
//         if(isNan(s[i])){
//             //문자열 중 하나라도 숫자가 아닌 경우
//             //이때는 바로 false를 리턴한다.
//             return false;
//         }
//     }
//     return true
// }

// function solution(s) {
//     if(s.length != 4 && s.length!==6){
//         return false;
//     }
//     const answer = s.split("").filter(el => {
//         return isNaN(el) ===true
//         console.log(el, isNaN(el))
//     })
// 빈 배열이 아니라면, 전체가 숫자로 구성되어 있지 않다. (false)
// 빈 배열이라면, 전체가 숫자로 구성되어있다. (true)
//     return answer.length ===0
// }

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// function solution(n) {
//     var answer = 0;
//     for(let i=1; i<=n/2; i++){
//         if(n%i===0){
//             answer += i
//         }
//     }
//     return answer;
// }