// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//     let answer = 0;
//     for(let i=1; i<=9; i++){
//         if(numbers.includes(i) === false){
//             answer += i;
//         }
//     }
//     return answer;
// }

// function solution(numbers) {
//     return new Array(9).fill(1).reduce((acc,cur, i)=>{
//         const num = cur + i
//         return acc + (
//             numbers.includes(num)
//             ?0
//             :num
        
//         )
//     },0)
// }

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// function solution(arr) {
//     var answer = [];
//     minNum= Math.min(...arr)
//     answer = arr.filter(el=> el!== minNum)
//     if(answer.length === 0 ){
//         answer.push(-1)
//     }
//     return answer;
// }