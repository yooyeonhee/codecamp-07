// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// function solution(s){
//     var answer = true;
//     s = s.toLowerCase()
//     let pcount = 0
//     let ycount = 0
//     for (let i=0; i<s.length; i++){
//         if(s[i] === 'p'){
//             pcount += 1
//         }
//         if(s[i] === 'y'){
//             ycount += 1
//         }
//     }
//     if(pcount===ycount||pcount===ycount===0){
//         answer = true
//     }
//     else{
//         answer = false
//     }

//     return answer;
// }

// function solution(s){
//         s = s.toLowerCase()
//         const obj = {p:0, y:0}
//         for(let i=0; i<s.length; i++){
//             if(obj[s[i]]=== undefined) obj[s[i]] = 0
//             obj[s[i]]++
//         }
//         return obj.p===obj.y
//     }

// function solution(s){
//     s = s.toLowerCase()
//     const obj = {}
//     const str = s.split('').forEach(str => {
//         if(obj[str] === undefined){
//             obj[str] = 1
//         }
//         else{
//             obj[str]++
//         }
//     })
//     return obj.p === obj.y

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// function solution(s) {
//     let answer= []
//     arr = s.split(" ")

//         for (let i=0; i<arr.length; i++){
//           let change = "";
//           for(let j=0; j<arr[i].length; j++){
//             if(j%2===1){
//               change = change + arr[i][j].toLowerCase()
//             }
//             else{
//               change = change + arr[i][j].toUpperCase()
//             }
//           }
//           answer.push(change)
//         }
//         return(answer.join(" "))
//     }
