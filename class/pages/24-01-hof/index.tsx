export default function HofPage(){

    const onClickMove = (boardId) => (event)) {
        router.push(`/${boardId}`)

    return (
        <div>
            {[
                {id: "!111, title:"안녕하세요:", writer:"철수", contents:"반갑습니다.""},
                {id: "!222, title:"zzzzz:", writer:"영희 ", contents:"날씨가 좋아요""},
                {id: "!333, title:"zzz:", writer:"훈이", contents:"반갑습니다.""}
            ].map(el)=>(
                <div key = {el=id}> onClick{onClickMove(el.id)}>{<el."title"} {_el.writer}</div>
    )))}

    </div>
    
}

 