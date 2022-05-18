import {useState} from 'react'
import {useMutation} from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { useRouter } from 'next/router'


export default function BoardWrite(props){
    const router = useRouter()

    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const [name, setName] = useState("")
    const [contents, setContents] = useState("")
    const [title, setTitle] = useState("")

    const onClickGraphqlApi = async() => {
        //rest api 방식
        // const result = await axios.get("https://koreanjson.com/posts/1")
        //graphql api 방식
        const result= await callGraphql({
            variables: {
                writer: name,
                title: title,
                contents:contents
            }
        })
        console.log(result)
        setData(result.data.createBoard)
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async() => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer:name,
                title,
                contents
            }
        })
        router.push(`/08-05-boards/${result.data.updateBoard.number}`)
        // router.push(`/08-05-boards/${router.query.number}`)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }



    return(
        <BoardWriteUI 
            onChangeName={onChangeName} 
            onChangeTitle={onChangeTitle} 
            onChangeContents={onChangeContents}
            onClickGraphqlApi={onClickGraphqlApi}
            onClickUpdate = {onClickUpdate}
            data={data}
            isEdit = {props.isEdit}
        />
    )

}