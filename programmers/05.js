// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
// 100~90 → "A"
// 89~80 → "B"
// 79~70 → "C"
// 69~60 → "D"
// 59점 이하는 "F"
// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.
// score은 리스트이다.

// const score =[100, 40, 98, 68]
// function grade(score) {
//   for(i=0;i<score.length;i++){
//     if(score[i]>100){
//     	console.log("잘못된 점수입니다.")
//     }
//     else if(score[i] >89){
//     	console.log("A")
//     }
//     else if(score[i] >79){
//     	console.log("B")
//     }
//     else if(score[i] >69){
//     	console.log("C")
//     }
//     else if(score[i] >59){
//     	console.log("D")
//     }
//     else if(score[i]>=0){
//     	console.log("F")
//     }
//     else{
//     	console.log("잘못된 점수입니다.")
//     }
//   }
// }
// grade(score)


// 오른쪽 myShopping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.
// 등급표
// "0~2"  ⇒ Bronze
// "3~4" ⇒ Silver
// 5이상 ⇒ Gold

// const myShopping = [
//     { category: "과일", price: 12000　},
//     { category: "의류", price:10000　 },
//     { category: "의류", price: 20000　},
//     { category: "장난감", price: 9000 },
//     { category: "과일", price: 5000　 },
//     { category: "의류", price: 10000  },
//     { category: "과일", price: 8000　　},
//     { category: "의류", price: 7000　　},
//     { category: "장난감", price: 5000  },
//     { category: "의류", price: 10000　 },
// ]
// function priceGrade(){
// let priceAdd = 0
// let buyCount = 0
// const count = myShopping.length
// for (let i=0; i<count;i++){
// if(myShopping[i].category === "의류"){
//   buyCount++
//   priceAdd += myShopping[i].price
// }
// }
// if(buyCount>0 && buyCount<3){
//   console.log(`의류를 구매한 횟수는 총 ${buyCount}회 금액은 ${priceAdd}원이며 등급은 Bronze입니다.`)
// }
// else if(buyCount<4){
// console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${priceAdd}원이며 등급은 Silver입니다.`)
// }
// else{
// console.log(`의류를 구매한 횟수는 총 ${buyCount}회 금액은 ${priceAdd}원이며 등급은 Gold입니다.`)
// }
// }
// priceGrade(myShopping)



