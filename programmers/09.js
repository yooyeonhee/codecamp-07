// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// function solution(n)
// {
//     var answer = 0;
//     for(i=0; i<String(n).length; i++){
//         answer += Number(String(n)[i])
//     }
    

//     return answer;
// }

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// function solution(x, n) {
//     var answer = [];
//     for(let i=0; i<n; i++){
//         answer.push(x+x*i)
//     }
//     return answer;
// }