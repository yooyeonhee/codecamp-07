import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql
`
mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
    createProduct(seller:$seller, createProductInput:$createProductInput){
      _id
      number
      message
    }
  }
`
export default function DynamicRoutingPage() {
    const router = useRouter()

    const [callGraphql] = useMutation(CREATE_PRODUCT)

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }
    const onClickSave = async() => {
        if(seller !== "" && name !== "" && detail !== "" && price !== ""){
            try{
                const result = await callGraphql({
                    variables: {
                        seller :seller,
                        createProductInput :{
                            name: name,
                            detail:detail,
                            price:Number(price)
                        }
                    },
                })
                console.log(result);
                //   alert("게시글이 등록되었습니다.");
                router.push(`/quiz/05-02-dynamic-routed/${result.data.createProduct._id}`)
            }
            catch(error){
                console.log(error)
                alert(error.message) //백엔드 개발자가 만든 error 메시지를 보여줌
            }
        }
    }
    return(
        <>
            판매자 : <input type="text" onChange={onChangeSeller}/>
            상품명 : <input type="text" onChange={onChangeName}/>
            상품내용 : <input type="text" onChange={onChangeDetail}/>
            상품가격 : <input type="int" onChange={onChangePrice}/>
            <button onClick={onClickSave}>상품 등록하기</button>
        </>
    )
}