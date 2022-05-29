import * as S from "./pagination.styles";
export default function PaginationUI(props) {
  return (
    <div>
      <button onClick={props.onClickToPrev} disabled={props.startPage === 1}>
        {"<"}
      </button>
      {new Array(10).fill(1).map((_, index) => {
        return (
          index + props.startPage <= props.lastPage && (
            <S.Page
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickGetPage}
              isActive={props.startPage + index === props.nowPage}
            >
              {index + props.startPage}
            </S.Page>
          )
        );
      })}
      <button
        onClick={props.onClickToNext}
        disabled={props.startPage + 10 > props.lastPage}
      >
        {">"}
      </button>
    </div>
  );
}
