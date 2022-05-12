import {useState} from "react"
import axios from "axios"

export default function RestApi() {

    const handleClickRestApi = async() => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
    }

    return(
        <div>
            {/* <div>{data.result}</div> */}
            <button onClick={handleClickRestApi}>REST-API 요청하기</button>
        </div>
    )
}