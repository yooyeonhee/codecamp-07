import { useState } from "react"
import { useMutation} from '@apollo/client'
import ProductWriteUI from "./productWrite.presenter"
import {CREATE_PRODUCT, UPDATE_PRODUCT} from "./productWrite.queries"
import { useRouter } from "next/router"

export default function ProductWrite(props) {
    const[data, setData] = useState("")
    const[seller, setSeller] = useState("")
    const[name, setName] = useState("")
    const[detail, setDetail] = useState("")
    const[price, setPrice] = useState("")
    const[callGraphql] = useMutation(CREATE_PRODUCT)
    const[updateProduct] = useMutation(UPDATE_PRODUCT)

    const router = useRouter()

    const handleClickGraphqlApi = async() => {
        const result = await callGraphql({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail:detail,
                    price:Number(price)
                }
            }
        })
        console.log(result)
        setData(result.data.createProduct._id)
        router.push(`/quiz/08-01-reused-component/${result.data.createProduct._id}`)
    }

    const onClickUpdate = async() => {
        const result = await updateProduct({
            variables: {
                productId: router.query.id,
                updateProductInput: {
                    name: name,
                    detail:detail,
                    price:Number(price)
                }
            }
        })
        router.push(`/quiz/08-01-reused-component/${result.data.updateProduct._id}`)
        // router.push(`/quiz/08-01-reused-component/${router.query.id}`)
    }

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
    

    return(
        <ProductWriteUI
        onClickUpdate = {onClickUpdate}
        onChangeDetail = {onChangeDetail}
        onChangeName = {onChangeName}
        onChangePrice = {onChangePrice}
        onChangeSeller= {onChangeSeller}
        handleClickGraphqlApi = {handleClickGraphqlApi}
        isEdit = {props.isEdit}
        />
    )
}