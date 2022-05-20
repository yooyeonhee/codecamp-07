import {useQuery, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import BoardDetailUI from "./BoardDetail.presenter"
import {FETCH_BOARD, DELETE_BOARD} from "./BoardDetail.queries"


export default function BoardDetailFunction(){
    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.number}
    })
    // console.log(router.query)
    // console.log(data)

    const onClickMoveToEdit = () => {
        router.push(`/boards/${router.query.number}/edit`)
    }
    const onClickMoveToList = () => {
        router.push(`/boards`)
    }

    const onClickDelete = () => {
        deleteBoard({
            variables: { boardId: router.query.number }
        })
        console.log(router.query.number)
        router.push(`/boards`)
    }

    return(
        <BoardDetailUI 
        onClickMoveToList ={onClickMoveToList} 
        onClickMoveToEdit ={onClickMoveToEdit} 
        onClickDelete={onClickDelete}
        router={router} 
        data={data}/>
    )
}