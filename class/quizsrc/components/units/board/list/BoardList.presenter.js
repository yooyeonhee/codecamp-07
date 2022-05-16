import * as S from "./BoardList.styles"
export default function BoardListUI(props) {

    return (
        <> 
        <S.PageButton onClick={props.onClickMove1}>4게시글 이동하기</S.PageButton> 
        <S.PageButton onClick={props.onClickMove2}>5게시글 이동하기</S.PageButton> 
        <S.PageButton onClick={props.onClickMove3}>28게시글 이동하기</S.PageButton> 
        </>
    )
}