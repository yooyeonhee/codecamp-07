import { useState } from "react"
import { gql, useMutation} from '@apollo/client'

const CREATE_BOARD = gql
`
mutation{
    createBoard(writer:"홍길동", title:"홍길동전", contents:"동전동전동전")
    {
      number
      message
    }
  }
`
export default function graphqlApi() {
    const[data, setData] = useState("")
    const[callGraphql] = useMutation(CREATE_BOARD)
    
    const handleClickGraphqlApi = async() => {
        const result = await callGraphql()
        console.log(result)
        setData(result.data.createBoard.message)
    }

    return(
        <div>
            <div>{data}</div>
            <button onClick={handleClickGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )
}