import * as S from "../../styles/emotion_list"
import {useQuery, gql} from '@apollo/client'
import { getDate } from "../../src/commons/libraries/utils"
import { useRouter } from "next/router"
import { useState } from "react"

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            createdAt
        }
    }
`

export default function ListPage () {
    const { data } = useQuery(FETCH_BOARDS)
    const router = useRouter()

    const onClickTitleToDetail = (event) => {
        router.push(`/boards/${event.target.id}`);
    }
    // const [checkList, setCheckList] = useState([]);

    // const onCheckedItem = (list) => {
    //     //배열에 존재하지 않는다는 것은 아직 체크되지 않은 값이므로 체크하기 위해 값을 배열에 넣는다.
    //     if(checkList.every((ckl)=> ckl._if !== list._id)){
    //         setCheckList([...checkList, list]);
    //     }
    //    else{
    //     //배열에 존재한다는 것은 이미 체크되어 있다는 것으로 배열에서 제외시켜 체크를 없앤다.
    //     const result = checkList.filter((ckl)=> ckl_id !== list._id)
    //     setCheckList = result
    //    }
        
    // }
    // const isChecked = (check) => {
    //     return checkList.some((ckl) => ckl._id ===check._id);
    // }

    // const onCheckAll = () => {
    //     if(checkList.length === checkList.length){
    //         console.log(data)
    //         setCheckList(data)
    //         console.log(checkList)
    //     }

    // }


    return (
        <S.Body>
            <S.Wrapper>
                <S.BoxBoardArea>
                    <S.BoxBoardTitle>
                        베스트 게시글
                    </S.BoxBoardTitle>
                    <S.BoxBoards>
                        <S.BoxBoardWrapper>

                        </S.BoxBoardWrapper>
                        <S.BoxBoardWrapper>
                            
                        </S.BoxBoardWrapper>
                        <S.BoxBoardWrapper>
                            
                        </S.BoxBoardWrapper>
                        <S.BoxBoardWrapper>
                            
                        </S.BoxBoardWrapper>

                    </S.BoxBoards>
                </S.BoxBoardArea>

                {/* 목록 영역 */}
                <S.SearchListArea>
                    <S.SearchBarWrapper>
                        <S.SearchInputBox>
                            <S.SearchIcon src="/list/search.png"/>
                            <S.SearchInput type="text" placeholder="제목을 검색해주세요."/>
                        </S.SearchInputBox>
                        <S.SearchDate>YYYY.MM.DD ~ YYYY.MM.DD</S.SearchDate>
                        <S.SearchButton>검색하기</S.SearchButton>

                    </S.SearchBarWrapper>
                    <S.SearchListWrapper>
            
                        <S.TitleRow>
                            <S.AllCheck><input type="checkbox" /></S.AllCheck>
                            <S.TitleNum>번호</S.TitleNum>
                            <S.TitleTitle >제목</S.TitleTitle>
                            <S.TitleWriter>작성자</S.TitleWriter>
                            <S.TitleDate>날짜</S.TitleDate>
                        </S.TitleRow>
                        {data?.fetchBoards.map((el, indx)=>(
                            <S.Row key = {el._id}>
                                {/* <S.Num>{String(el._id).slice(-4).toUpperCase}</S.Num> */}
                                <S.Check><input type="checkbox"/></S.Check>
                                <S.Num>{indx+1}</S.Num>
                                <S.Title id = {el._id} onClick={onClickTitleToDetail}>{el.title}</S.Title>
                                <S.Writer>{el.writer}</S.Writer>
                                <S.Date>{getDate(el.createdAt)}</S.Date>
                            </S.Row>
                        ))}  
                    </S.SearchListWrapper>

                </S.SearchListArea>
            </S.Wrapper>

        </S.Body>

    )
}