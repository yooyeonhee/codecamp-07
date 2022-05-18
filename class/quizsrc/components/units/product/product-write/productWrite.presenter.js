


export default function ProductWriteUI(props) {


    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"} 페이지</h1>
            판매자 : <input type="text" onChange={props.onChangeSeller}></input>
            상품명 : <input type="text" onChange={props.onChangeName}></input>
            상세내용 : <input type="text" onChange={props.onChangeDetail}></input>
            가격 : <input type="text" onChange={props.onChangePrice}></input>
            {/* <div>{props.data}</div> */}
            <button onClick={props.isEdit ?props.onClickUpdate:props.handleClickGraphqlApi}>{props.isEdit?"수정":"등록"}하기</button>
        </div>
    )
}