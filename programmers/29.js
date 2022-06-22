// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

// function solution(d, budget) {
//     const answer = []

//     d.sort((a,b)=>a-b)

//     let sum = 0
//     for(let i=0; i<d.length; i++){
//         sum += d[i]
//         if(sum <= budget){
//             answer.push(d[i])
//         }
//     }
//     return answer.length
// }

// function solution(d, budget) {
//     return d.sort((a,b)=>a-b).filter(money => {
//         budget -= money

//         return budget >= 0
//     }).length
// }

// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.

// function solution(s) {
//     let answer = ""

//     s = s.toLowerCase();

//     let idx = 0
//     for(let i=0; i<s.length;i++){
//         let word = s[i]
//         if(s[i]===" "){
//             idx=0
//         }else{
//             if(idx===0){
//                 word = s[i].toUpperCase();
//             }
//             idx++
//         }
//         answer += word
//     }
//     return answer
// }
