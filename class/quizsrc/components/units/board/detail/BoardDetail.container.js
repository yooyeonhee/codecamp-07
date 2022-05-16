import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import {FETCH_BOARD} from '../detail/BoardDetail.queries'

export default function BoardDetailFunction() {
    const router = useRouter()
    console.log(router)
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })

    console.log(data)

    return (
        <BoardDetailUI data={data} router={router} />
    )
}