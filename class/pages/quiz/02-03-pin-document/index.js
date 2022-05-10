export default function PinDocument(){
    function make(){
        const num = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("sixNum").innerText = num

    }
    return(
        <div>
            <div id="sixNum">000000</div>
            <button onClick={make}>인증번호</button>
        </div>
    )
}