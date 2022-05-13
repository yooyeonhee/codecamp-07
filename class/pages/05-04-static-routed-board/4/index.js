// import {useRouter} from 'next/router'
import { gql, useQuery} from '@apollo/client'

const FETCH_BOARD = gql
`
    query{
        fetchBoard(number: 4){
            number
            writer
            title
            contents
        }

    }
`
// 페이지에 접속하면 자동으로 벡앤드로 요청이 날라간다.
// 따라서 특정 버튼을 누르지 않아도 데이터를 띄운 화면이 나타난다.
export default function StaticRoutedPage() {
    //목록으로 돌아가는 라우터
    // const router = useRouter()

    // const onClickMoveBoard = () => {
    //     router.push('/05-03-static-routing-board')
    // }
    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    return (
        <>
        <div>4번 게시글 이동이 완료되었습니다.</div>
        <div>작성자: {data?.fetchBoard.writer}</div>
        <div>작성자: {data?.fetchBoard.title}</div>
        <div>작성자: {data ? data.fetchBoard.contents : "조금만 기다려주세요"} </div>
        {/* <button onClick={onClickMoveBoard}>게시글 목록</button> */}
        </>
    
    )
}