import axios from 'axios' //설치가 되어 있어야 한다.
import {useState} from 'react'


export default function RestGet(){
    const [dataTitle, setDataTitle] = useState("")
    //유지보수를 위해 주로 사용되는 함수 이름 사용 
    // const onClickRestApi
    const handleClickRestApi = async() => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        setDataTitle(result.data.title)
    }

    
    return(
        <div>
            <div>{dataTitle}</div>
            <button onClick={handleClickRestApi}>Rest-Api 요청하기!</button>

        </div>
    )
}