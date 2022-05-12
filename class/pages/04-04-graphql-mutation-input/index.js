import {useState} from 'react'
import {gql, useMutation} from '@apollo/client'

const CREATE_BOARD = gql
`
mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer:$writer,title:$title,contents:$contents){
        _id
        number
        message
    }
      
}
`

export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callGraphql] = useMutation(CREATE_BOARD)
    const [name, setName] = useState("")
    const [contents, setContents] = useState("")
    const [title, setTitle] = useState("")

    const handleClickGraphqlApi = async() => {
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
        setData(result.data.createBoard.message)
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
        <div>
            작성자 : <input type="text" onChange={onChangeName}/>
            제목 : <input type="text" onChange={onChangeTitle}/>
            내용 : <input type="text" onChange={onChangeContents}/>
            <div>{data}</div>
            <button onClick={handleClickGraphqlApi}>Rest-Api 요청하기!</button>
        </div>
    )

}