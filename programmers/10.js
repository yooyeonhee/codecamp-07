// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// function solution(s) {
//     var answer = '';
// ss = ""
// bs = ""
// for(i=0; i<s.length;i++){
//   if(s.charCodeAt(i)>=97){
//     ss = ss+s[i]
//   }
//   else{
//     bs = bs+s[i]
//   }
// }

// function solution(s) {
//     const answer = s.split('').sort((a,b)=> a>b ? -1 : 1).join('')
//     return answer
// }

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// function solution(array, commands) {
//     var answer = [];
//     for(i=0; i<commands.length;i++){
//         let result = 0
//         let temp= []
//         for(k=commands[i][0]-1; k<commands[i][1]; k++){
//             temp.push(array[k])
//         }
//       console.log(temp)
//       	temp.sort((a, b) => a - b)
//       	result = temp[commands[i][2]-1]
//         answer.push(result)
//     }
//     return answer;
// }
// const answer = commands.map(num => {
//     const result = array.slice(num[0]-1, num[1]).sort((a,b)=> a-b)
//     return result[num[2]-1]

// })
// return answer
