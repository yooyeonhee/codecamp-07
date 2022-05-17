// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// function solution(num) {
    // return (num % 2 === 0 ? "Even": "Odd")
//}
// function solution(num) {
    // var answer = '';
    // if(num%2===0){
    //     answer = "Even"
    // }
    // else{
    //     answer = "Odd"
    // }
    // return answer;
// }

//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// function solution(arr) {
//     var answer = 0;
//     arr.forEach((num) => (answer+=num))
//     answer = answer/arr.length
//     return answer;
// }

// arr = [1,2,3,4,5,10];

// arr.reduce((acc, cur)=>{
//   return acc+cur
//   }, 0)

//acc는 합산 된 수 cur 더하게 될 수 
//, 0  은 초기값

// function solution(arr) {
//     const answer= arr.reduce((acc, cur) => {
//         return acc+cur
//     }, 0)
//     return answer/arr.lenght;
// }


//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// function solution(s) {
//     var answer = '';
    
//     if(s.length<=2){
//         answer = s
//     }
//     else{
//         if(s.length%2===0){
//             answer = s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1)
//         }
//         else{
//             answer = s[Math.floor(s.length/2)]
//         }
        
//     }
//     return answer;
// }

// function solution(s) {
//     const center = Math.floor(s.length/2);
//     let answer = s[center];
    
//     if(s.length %2 ===0){
//         answer = s[center -1] +answer
//     }
//     return answer;
// }

// //function solution(s) {
//     const center = Math.floor(s.length / 2);
//     return s.length %2 ===1
//         ? s[center]
//         : s.substring(center-1, center+1)
// }