export default function TypeScriptPage() {

    //타입 추론
    let aaa = "안녕하세요"
    aaa = "안녕"//3

    //타입명시
    let bbb : string = "반갑습니다"

    //문자타입
    let ccc: string
    ccc = "반가워요"
    ccc = "안녕"//3

    //숫자타입
    let ddd :number = 33
    ddd = 2345//"반가워요"

    //불린타입
    let eee : boolean = true
    eee = false//"false"

    //배열타입
    let fff :number[] = [1,2,3,4,]
    let hhh = [1,2,3,"영희"] // 타입을 명시하지 않으면, 배열이 숫자나 문자가 들어올 수 있는 배열로 추론((string|number)[])
    let ggg :string[] = ["철수","영희","훈이"]

    //객체 타입

    interface IProfile {
        name: string
        age:string | number
        school:string
    }

    const profile:IProfile = {
        name:"철수",
        age:8,
        school:"다람쥐초등학교" 
    }

    profile.age = "8살"

    //함수타입
    const add=(age1:number, age2:number, unit:string):string => {
        return (age1+age2)+unit
    }

    const result = add(13,25,"살")


    return <div> 타입스크립트 연습하기 </div>

}