// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// function solution(absolutes, signs) {
//     for(let i =0; i<absolutes.length; i++){
//         if(!signs[i]){
//             absolutes[i] = absolutes[i] * (-1)
//         }
//     }
//     return absolutes.reduce((acc, cur)=> acc+cur,0)
// }

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// function solution(n, m) {
//     const biggest = Math.max(n,m);
//     //최대공약수 구하기
//     let max = 0;
//     for (let i=1; i<=biggest; i++){
//         if(n%i ===0 && m%i ===0){
//             max = i;
//         }
//     }
//     //최소공배수 구하기
//     let min = 0;
//     for(let i = biggest; i<=n * m; i += biggest){
//         if(i%Math.min(n,m)===0){
//             min = i;;
//             break;
//         }
//     }
//     return [max, min]
// }

// function solution(n, m) {

//     // 유클리드 호제법 - 최대공약수를 구하는 알고리즘
//     // a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
//     // 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
//     // 나머지 값이 0이 되지 않으면, 큰 수(a)에 작은수 (b)를 할당하고
//     // 작은 수(b)에는 나눴던 나머지 값을 할당한다.
//     // 반복해서 나머지 값이 0이 나오면, 이때 나눴던 작은 수(b)가 최대공약수가 된다.

//     let a = Math.max(n, m);
//     let b = Math.min(n, m);
//     let r = 0

//     while((a%b)>0){
//         r = a%b;
//         a = b;
//         b = r;
//     }
//     //최소공배수를 구하는 공식 : 두 수를 곱한 값에 최대공약수를 나눈 값
//     return [b, (n*m)/b]
// }
