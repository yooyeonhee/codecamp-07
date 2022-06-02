console.log("타입스크립트를 실행했어요!!!");

// API(함수) 만들기

// DB 접속하기
// 1. SQL ORM(typeorm) 설치
// 2. pg 설치

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";
import { ApolloServer, gql } from "apollo-server";

// REST : express

// GRAPHQL : ApolloServer

// 1. 타입 - typeDefs
const myTypeDefs = gql`
  input createBoardInput {
    writer: String
    title: String
    contents: String
  }
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title:String, contents:String) : String # - 연습용
    createBoard(createBoardInput: createBoardInput): String # - 실습용
  }
`;
// 2. 함수(API) - resolvers
const myResolvers = {
  Query: {
    fetchBoards: async () => {
      // 게시물 목록 조회
      const result = await Board.find();
      // 게시물 한개 조회
      // Board.findOne()
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents:args.createBoardInput.contents
      });

      // 수정하면
      // Board.update({writer:"철수"}, {title:"제목2"})

      // 삭제하면
      // Board.delete({writer: "철수"})
      // Board.update({writer:"철수", {isDeletedAt: new Date()}})

      return "게시물 등록에 성공했습니다!!";
    },
  },
};

// 서버 생성
const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
  // cors: ["https://naver.com", "https://daum.com"]
});

// 접속 정보 작성
const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  port: 5017,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

// 연결시킴
AppDataSource.initialize()
  .then(() => {
    console.log("연결 성공!!");

    // 백엔드 API listen(24시간동안 접속 가능하게 대기상태로 만들어줌)
    server
      .listen(4000)
      .then(() => {
        console.log("서버 실행 성공!!!");
      })
      .catch(() => {
        console.log("서버 실행 실패!!!");
      });
  })
  .catch(() => {
    console.log("연결 실패!!");
  });
