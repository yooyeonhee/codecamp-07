import {useState} from 'react'

export default function PinState(){
    const [num, setNum] = useState("0000000")
    function make(){
    setNum(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
        

    }
    return(
        <div>
            <div>{num}</div>
            <button onClick={make}>인증번호</button>
        </div>
    )
}
