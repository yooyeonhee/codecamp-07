export default function CountDocument(){
    function plus(){
        const num = document.getElementById("number").innerText
        const result = Number(num)+1
        document.getElementById("number").innerText = result
    }
    return(
        <div>
            <div id="number">0</div>
            <button onClick={plus}>카운트 증가</button>
        </div>
    )
}