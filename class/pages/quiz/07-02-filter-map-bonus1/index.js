const classmates = [
    { name: "철수", age:10, school: "토끼초등학교"},
    { name: "영희", age:13, school: "다람쥐초등학교"},
    { name: "훈이", age:11, school: "토끼초등학교"}
];


export default function FilterMapBonus1 () {

    const candyArr = classmates.filter((student) => (student.school ==="토끼초등학교")).map((student)=>({...student,candy:10}))
    const childArr = classmates.filter((student) => (student.school === "다람쥐초등학교")).map((student)=>({...student, name:`${student.name}어린이`}))
    return(
        <div>
            {candyArr.map((el) => (
                <div key ={el.name}>{el.name} {el.age} {el.school} {el.candy}</div>
            ))}
            {childArr.map((el) => (
                <div key ={el.name}>{el.name} {el.age} {el.school}</div>
            ))}
        </div>
        
    )

}