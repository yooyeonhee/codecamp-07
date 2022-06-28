// 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
// 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

// 다트 게임은 총 3번의 기회로 구성된다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

// const isBonus = ["S", "D", "T"] // 보너스를 판별하기 위한 배열
// function solution(dartResult) {
//     // 1번째 게임부터 마지막 게임까지의 점수를 저장하는 배열
//     const answer = []

//     let score = ""; // 점수만 뽑아서 저장하는 변수
//     for(let i=0; i<dartResult.length; i++){
//         if(isNaN(dartResult[i])===false){
//         // 숫자 타입으로 변환한 데이터의 결과가 NaN 값이 아닌 경우( =숫자가 맞는 경우)
//             score += dartResult[i]
//         }else{
//             //숫자 타입으로 변환한 데이터의 결과가 NaN 값이 맞는 경우 (=숫자가 아닌 경우)
//             // ===보너스와 옵션이 이쪽으로 처리된다.
//             if(isBonus.includes(dartResult[i])){
//                 score = Number(score)

//                 if(dartResult[i]==="D"){
//                     score = score ** 2
//                     // score = Math.pow(score,2)
//                 }else if(dartResult[i]==="T"){
//                     score = Math.pow(score,3)
//                 }
//                 answer.push(score);
//                 score = "";
//             }else{
//                 // 옵션은 이곳에서 처리가 된다("*","#")
//                 if(dartResult[i]==="#"){
//                     answer[answer.length -1] *= -1
//                 }else{
//                     answer[answer.length -1] *= 2
//                     //현재 게임이 2번째 게임 이상일 때
//                     if(answer.length >1){
//                         answer[answer.length-2] *= 2
//                     }
//                 }
//             }
//         }
//     }
//     return answer.reduce((acc, cur)=>{
//         return acc+cur
//     })
// }

// const isBonus = ["S", "D", "T"] // 보너스를 판별하기 위한 배열
// function solution(dartResult) {
//     let score = "" // 문자열에 있는 점수 데이터를 저장
//     let currentScore = 0 // 현재 게임의 점수를 저장
//     let last = false // 점수를 최종적으로 저장할 시점을 저장

//     return dartResult.split("")
//             .reduce((acc, cur, i)=>{
//             if(isNaN(cur)===false){
//                 score += cur
//                 last = false // 새로운 게임이 시작되는 시점

//             }else if(isBonus.includes(cur)){
//                 // 보너스 처리
//                 score = Number(score)
//                 const squared = isBonus.indexOf(cur)+1
//                 currentScore = score ** squared
//                 score = "";
//                 if(isNaN(dartResult[i+1])===false|| dartResult[i+1]===undefined){
//                     //현재 게임에 옵션이 없고, 그 다음 게임이 시작되었을 때
//                     last = true;
//                 }
//             }else{
//                 last=true
//                 // 옵션처리
//                 if(cur === "#"){
//                     currentScore *= -1
//                 }
//                 else{
//                     currentScore *=2
//                     if(acc.length>0){
//                         acc[acc.length-1] *= 2
//                     }
//                 }
//             }
//         if(last){
//             //턴이 종료되었을 때만 점수를 최종 저장한다.
//             acc.push(currentScore)
//         }
//         return acc
//     }, []).reduce((acc, cur)=> {
//         return acc+cur
//     })
// }
