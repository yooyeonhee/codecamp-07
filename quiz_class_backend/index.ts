console.log("타입스크립트를 실행했어요!!!");
import { DataSource } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Product } from "./Product.postgres";

// typeDefs

const myTypeDefs = gql`
  # createProduct
  input createProductInput {
    name: String
    detail: String
    price: Int
  }
  input updateProductInput {
    name: String
    detail: String
    price: Int
  }
  # fetchProducts Product
  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }
  # fetchProducts
  type Query {
    fetchProducts: [Product]
    fetchProduct(productId: ID): Product
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: createProductInput
    ): String
    updateProduct(productId: ID, updateProductInput: updateProductInput): String
    deleteProduct(productId: ID): String
  }
`;

// resolvers

const myResolvers = {
  Query: {
    fetchProducts: async () => {
      const productsResult = await Product.find();

      return productsResult;
    },
    fetchProduct: async (_: any, args: any) => {
      const productResult = await Product.findOne({
        where: { _id: args.productId },
      });
      return productResult;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "상품이 등록에 성공했습니다!";
    },
    updateProduct: async (_: any, args: any) => {
      const result = await Product.update(
        { _id: args.productId },
        { ...args.updateProductInput }
      );
      return "상품이 수정에 성공했습니다.";
    },
    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });
      return "삭제되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
});

// 접속 정보 작성
const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  port: 5017,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

// 연결시킴
AppDataSource.initialize()
  .then(() => {
    console.log("연결 성공!!");
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
