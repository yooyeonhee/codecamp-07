import {useState} from 'react'
export default function CounterDocumentPage(){

    const [hello, setHello ] = useState("안녕하세요")

    function chHello(){
        setHello("반갑습니다.")
    }

    return (
        //html 이 들어오면 함수형 컴포넌트
        //html 이 없으면 그냥 함수.
        <div>
            <button onClick={chHello}>{hello}</button>
        </div>
    )

}