// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// const lower = 'abcdefghijklmnopqrstuvwxyz'; // 소문자 알파벳만 저장
// const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 대문자 알파벳만 저장

// function solution(s, n) {
//     let answer = '';

//     for( let i = 0; i < s.length; i++ ) {
//         if( s[i] === " " ) {
//             // 공백일 경우
//             answer += " ";

//         } else {
// 	        // 소문자인지를 먼저 검증한 후
// 	        // 소문자가 맞다면, 소문자 리스트를 저장
// 	        // 소문자가 아니라면, 대문자 리스트를 저장
// 	        const word = lower.includes( s[i] ) ? lower : upper;
// 	        let index = word.indexOf( s[i] ) + n;

// 	        if( index >= 26 ) {
// 	            index -= 26;
// 	        }

// 	        answer += word[index];
// 				}
//     }
//     return answer;
// }

// function solution(s, n) {
//     let answer = "";

//     for( let i = 0; i < s.length; i++ ) {
//         if( s[i] === " " ) {
//             answer += " ";
//             continue;
//         }
//         let code = s[i].charCodeAt() + n;
//         if( code > 122 || (code > 90) && (code - n) < 97 ) {
//             // 소문자 z(122) 초과했거나
//             // 대문자 Z(90)을 초과하면서
//             // 기존의 유니코드 번호가 대문자일 경우
//             code -= 26;
//         }
//         answer += String.fromCharCode( code );
//     }

//     return answer;
// }
