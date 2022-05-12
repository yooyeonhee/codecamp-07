// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

// function sum(num) {
// 	let count = 0;
//   for(let i=1;i<num+1;i++){
//     count+= i
//   }
//   return count
// }
// sum(5)


// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

// function countLetter(str) {
// 	let count = 0;
//   for(let i=0;i<str.length;i++){
//     if (str[i] == 'a' || str[i] == 'A'){
//       count++
//     }
//   }
//   return count
// }
// countLetter("A day without laughter is a day wasted.")

// 문장을 전부 소문자로 바꾸거나 대문자로 바꾸고 구하는 방법이 있다.
//toUpperCase() 와 toLowerCase()는 문자열에 적용되는 메서드이다. -> 모두 대문자로 변환 모두 소문자로 변환

// function countLetter(str) {
//     str = str.toUpperCase()
//     console.log(str)
//       let count = 0;
//     for(let i=0;i<str.length;i++){
//       if (str[i] == 'A'){
//         count++
//       }
//     }
//     return count
//   }
//   countLetter("A day without laughter is a day wasted.")


// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 
// num이 3일 경우에는 "1-2-3"입니다.

//function makeNumber(num) {
//     const arr=[]
//         let str = '';
//     for(let i=1; i<num+1; i++){
//         arr.push(i)
//     }
//     str = arr.join("-")
//     return str
// }
// makeNumber(7)

//다른 풀이 방법
//문자와 숫자를 더했을때 결과를 생각해보자

// function makeNumber(num){
//     let answer = "";
    
//     for(let i =1; i<=num; i++){
//       answer += i
//       if(i !==num){
//         answer += "-"
//       }
//     }
//     console.log(answer)
//   }
//   makeNumber(3)


//num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
//num이 5일 경우에는 "135"입니다.

// function makeOdd(num) {
// 	const arr = []
// 	let str = '';
//   for(let i=1; i<num+1; i++){
//     if(i%2==1){
//       arr.push(i)
//     }
//   }
//   str = arr.join("")
//   return str
// }
// makeOdd(7)

//다른 방법 풀이

// function makeOdd(num) {
//     let answer = ""
//       for(let i=1; i<=num; i++){
//       if(i%2===1){
//         answer += i;
//       }
//     }
//     console.log(answer)
//   }
//   makeOdd(10)


// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// function bigNum(str) {
// 	let biggest = 0;
// 	for(let i=0; i<str.length; i++){
//     if(Number(str[i])>biggest){
//       biggest = Number(str[i])
//     }
//   }
//   return biggest
// }
// bigNum("834820348")


//추가 학습
// for문 활용
// object -> 문자열, 객체, 배열
// 1.for(let key in object)
// arr = [3,23,4,3,4,5,]
// const add = 0
// key 에는 인덱스 값이 들어감
// for(let key in arr){
//   console.log(key)
// }

// 2.for(let key of object)
// object -> 문자열, 배열
// 속도가 많이 느리다.
// key에 요소 값이 들어감
// for (let key of str){
//     console.log(key)
// }

// 사용법 검색해봐
// 3.forEach
// 배열에만 사용 가능하다.
// arr = [1,2,3,5,2]
// arr.forEach(function(el){
//     console.log(el)
//   })
// 화살표 함수도 사용 가능
// arr.forEach (el => console.log(el))
