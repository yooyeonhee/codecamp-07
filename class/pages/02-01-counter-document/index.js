export default function CounterDocumentPage(){

    function counter(){
        let result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }

    return (
        //html 이 들어오면 함수형 컴포넌트
        //html 이 없으면 그냥 함수.
        <div>
            <div id = "count">0</div>
            <button onClick={counter}>UP COUNT!!</button>
        </div>
    )

}
