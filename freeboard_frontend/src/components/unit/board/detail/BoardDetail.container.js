import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'
import BoardDetailUI from "./BoardDetail.presenter"
import {FETCH_BOARD} from "./BoardDetail.queries"


export default function BoardDetailFunction(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.number}
    })
    console.log(router.query)
    console.log(data)

    return(
        <BoardDetailUI router={router} data={data}/>
    )
}