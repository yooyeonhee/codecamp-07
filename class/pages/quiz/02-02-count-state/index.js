import {useState} from 'react'

export default function CountState(){
    const [number, setNumber] = useState("0")
    function plus(){
        setNumber(Number(number) +1)
    }
    return(
        <div>
            <div>{number}</div>
            <button onClick={plus}>카운트 증가</button>
        </div>
    )
}