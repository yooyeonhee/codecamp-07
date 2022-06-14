import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit } = useForm();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: {
        boardId,
      },
      //   refetchQueries[{query: FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  const onClickSubmit = async (data) => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      //   refetchQueries[{query: FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button onClick={onClickDelete(el._id)}>X</button>
          </MyRow>
        ))}
      </div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} />
        <br />
        비밀번호 :<input type="password" {...register("password")} />
        <br />
        제목 : <input type="text" {...register("title")} />
        <br />
        내용 : <input type="text" {...register("contents")} />
        <br />
        <button style={{ width: "100px", height: "40px" }} type="submit">
          등록하기
        </button>
      </form>
    </>
  );
}
