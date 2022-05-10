import {useState} from 'react'
export default function CounterStatePage(){

    //js안에서는 바르게 동작하지만 화면에 반영되지 않는 문제가 있기 때문에 state를 사용.
    // let count = 10
    // function counter(){
    //     count = count+1
    // }
    const [count, setCount] = useState(0)

    function counter(){
        setCount(count+1)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={counter}>UP COUNT!!</button>
        </div>

    )
}