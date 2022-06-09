// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// function solution(a, b) {
//     return b.reduce((acc, cur, i)=>{
//         return acc + (cur * a[i])
//     }, 0)
// }

// function solution(a, b) {
//     var answer = 0;
//     for(let i=0; i<a.length; i++){
//         answer += (a[i]*b[i])
//     }
// }

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// function solution(arr1, arr2) {
//     const  answer = [[]];
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr1[i].length; j++){
//             const sum = arr1[i][j] + arr2[i][j]

//             if(answer[i]==undefined ){
//                 answer[i] = []
//             }
//             answer[i][j] = sum;
//         }
//     }
//     return answer
// }

// function solution(arr1, arr2) {
//     return arr1.map((num1, i)=>{
//          return num1.map((num2,j) => {
//              return num2 + arr2[i][j]
//          })
//      })
//  }
