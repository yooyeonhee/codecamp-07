import BoardWriteFunction from "../../../../src/components/unit/board/write/BoardWrite.container"
import { gql, useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql 
`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardWriteEditPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables:{boardId: router.query.number}
    })

    return(
        <BoardWriteFunction isEdit = {true} boardData={data}/>
    )
}