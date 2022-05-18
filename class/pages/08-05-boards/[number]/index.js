import { gql, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql
`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`
// 페이지에 접속하면 자동으로 벡앤드로 요청이 날라간다.
// 따라서 특정 버튼을 누르지 않아도 데이터를 띄운 화면이 나타난다.
export default function DynamicRoutedBoard() {
    const router = useRouter()
    
    const {data} = useQuery(FETCH_BOARD, {
        // aaa에 들어오는 주소는 문자열로 들어온다. playground에 명시된 값은 int이므로 Number를 통해 형 변환을 해준다.
        variables: {number: Number(router.query.number)}
    })
    console.log(router.query)
    // console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/08-05-boards/${router.query.number}/edit`)
    }
    return (
        <>
        <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
        <div>작성자: {data? data.fetchBoard.writer:"loading"}</div>
        <div>제목: {data? data.fetchBoard.title: "loading..."}</div>
        <div>내용: {data ? data.fetchBoard.contents : "loading..."} </div>
        <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        {/* <button onClick={onClickMoveBoard}>게시글 목록</button> */}
        </>
    
    )
}