// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// function solution(participant, completion) {
//     const answer = {}
//     for(let i=0; i<participant.length; i++){
//         answer[participant[i]] === undefined
//             ?answer[participant[i]]=1
//             :answer[participant[i]]++
//     }

//     for(let i=0; i<completion.length; i++){
//         answer[completion[i]]--;
//     }
//     for(let key in answer) {
//         if(answer[key] !== 0){
//             return key;
//         }
//     }
//}

// function solution(participant, completion) {
//         participant.sort((a,b)=> a>b?1:-1);
//         completion.sort()

//         return participant.filter((name, i)=>{
//             return name !== completion[i];
//         })[0]
//     }
