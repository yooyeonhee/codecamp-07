export default function CounterDocumentPage(){

    function hello(){
        document.getElementById("hello").innerText = "반갑습니다."
    }

    return (
        //html 이 들어오면 함수형 컴포넌트
        //html 이 없으면 그냥 함수.
        <div>
            <button id = "hello" onClick={hello}>안녕하세요</button>
        </div>
    )
}
