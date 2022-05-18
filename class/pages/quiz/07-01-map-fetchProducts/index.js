import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId:ID){
        deleteProduct(productId: $productId){
            message
        }
    }
`
const MyRow = styled.div`
    display: flex;
`

const MyColumn = styled.div`
    width: 25%;
`

export default function MapProductsPage(){

    const [checkList, setCheckList] = useState([]);

    const onCheckedItem = (list) => {
        // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
        console.log(list._id)
        console.log(checkList)
        if (checkList.every((cur) => cur._id !== list._id)) {
        setCheckList([...checkList, list]);
        } else {
        // 체크된것만 제외하고 배열에 담는다.
        const result = checkList.filter((cur) => cur._id !== list._id);
        setCheckList(result);
        console.log(result)
        }
    };
    const isChecked = (list) => {
        return checkList.some((cur) => cur._id === list._id);
    };

    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const { data } = useQuery(FETCH_PRODUCTS)

    const onClickDelete = (event) => {
        console.log(checkList)
        console.log(event.target.id)
        if(checkList.some((cur) => cur._id === event.target.id)){
            deleteProduct({
                variables: { productId : event.target.id },
                refetchQueries : [{query: FETCH_PRODUCTS}]
            
            })
        }

    }
    
    return (
        <div>
            {data?.fetchProducts.map((el) => (
                <MyRow key={el._id}>
                    <MyColumn><input type="checkbox" onChange={()=>onCheckedItem(el)} checked={isChecked(el)} /></MyColumn>
                    <MyColumn>{el.seller}</MyColumn>
                    <MyColumn>{el.name}</MyColumn>
                    <MyColumn>{el.price}</MyColumn>
                    <MyColumn>
                            <button id={el._id} onClick={onClickDelete}>삭제</button>
                    </MyColumn>
                </MyRow>
            ))}
        </div>
    )

}