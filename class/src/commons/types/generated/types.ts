export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IsBoard = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  boardAddress?: Maybe<IsBoardAddress>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  dislikeCount: Scalars['Int'];
  images?: Maybe<Array<Scalars['String']>>;
  likeCount: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<IsUser>;
  writer?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type IsBoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  zipcode?: Maybe<Scalars['String']>;
};

export type IsBoardAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IsBoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  rating: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<IsUser>;
  writer?: Maybe<Scalars['String']>;
};

export type IsCreateBoardCommentInput = {
  contents: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  rating: Scalars['Float'];
  writer?: InputMaybe<Scalars['String']>;
};

export type IsCreateBoardInput = {
  boardAddress?: InputMaybe<IsBoardAddressInput>;
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  password?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  writer?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type IsCreateUseditemInput = {
  contents: Scalars['String'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Int'];
  remarks: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<IsUseditemAddressInput>;
};

export type IsCreateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type IsCreateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type IsCreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type IsFileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  isUsed: Scalars['Boolean'];
  size?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type IsMutation = {
  __typename?: 'Mutation';
  createBoard: IsBoard;
  createBoardComment: IsBoardComment;
  createPointTransactionOfBuyingAndSelling: IsUseditem;
  createPointTransactionOfLoading: IsPointTransaction;
  createUseditem: IsUseditem;
  createUseditemQuestion: IsUseditemQuestion;
  createUseditemQuestionAnswer: IsUseditemQuestionAnswer;
  createUser: IsUser;
  deleteBoard: Scalars['ID'];
  deleteBoardComment: Scalars['ID'];
  deleteBoards: Array<Scalars['ID']>;
  deleteUseditem: Scalars['ID'];
  deleteUseditemQuestion: Scalars['ID'];
  deleteUseditemQuestionAnswer: Scalars['String'];
  dislikeBoard: Scalars['Int'];
  likeBoard: Scalars['Int'];
  loginUser: IsToken;
  loginUserExample: IsToken;
  logoutUser: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  restoreAccessToken: IsToken;
  toggleUseditemPick: Scalars['Int'];
  updateBoard: IsBoard;
  updateBoardComment: IsBoardComment;
  updateUseditem: IsUseditem;
  updateUseditemQuestion: IsUseditemQuestion;
  updateUseditemQuestionAnswer: IsUseditemQuestionAnswer;
  updateUser: IsUser;
  uploadFile: IsFileManager;
};


export type IsMutationCreateBoardArgs = {
  createBoardInput: IsCreateBoardInput;
};


export type IsMutationCreateBoardCommentArgs = {
  boardId: Scalars['ID'];
  createBoardCommentInput: IsCreateBoardCommentInput;
};


export type IsMutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID'];
};


export type IsMutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID'];
};


export type IsMutationCreateUseditemArgs = {
  createUseditemInput: IsCreateUseditemInput;
};


export type IsMutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: IsCreateUseditemQuestionInput;
  useditemId: Scalars['ID'];
};


export type IsMutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: IsCreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID'];
};


export type IsMutationCreateUserArgs = {
  createUserInput: IsCreateUserInput;
};


export type IsMutationDeleteBoardArgs = {
  boardId: Scalars['ID'];
};


export type IsMutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
};


export type IsMutationDeleteBoardsArgs = {
  boardIds: Array<Scalars['ID']>;
};


export type IsMutationDeleteUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type IsMutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID'];
};


export type IsMutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IsMutationDislikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IsMutationLikeBoardArgs = {
  boardId: Scalars['ID'];
};


export type IsMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IsMutationLoginUserExampleArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IsMutationResetUserPasswordArgs = {
  password: Scalars['String'];
};


export type IsMutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID'];
};


export type IsMutationUpdateBoardArgs = {
  boardId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
  updateBoardInput: IsUpdateBoardInput;
};


export type IsMutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['ID'];
  password?: InputMaybe<Scalars['String']>;
  updateBoardCommentInput: IsUpdateBoardCommentInput;
};


export type IsMutationUpdateUseditemArgs = {
  updateUseditemInput: IsUpdateUseditemInput;
  useditemId: Scalars['ID'];
};


export type IsMutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: IsUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID'];
};


export type IsMutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: IsUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID'];
};


export type IsMutationUpdateUserArgs = {
  updateUserInput: IsUpdateUserInput;
};


export type IsMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type IsPointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  balance: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  impUid?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
  statusDetail: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  useditem?: Maybe<IsUseditem>;
  user?: Maybe<IsUser>;
};

export type IsQuery = {
  __typename?: 'Query';
  fetchBoard: IsBoard;
  fetchBoardComments: Array<IsBoardComment>;
  fetchBoards: Array<IsBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchBoardsCountOfMine: Scalars['Int'];
  fetchBoardsOfMine: Array<IsBoard>;
  fetchBoardsOfTheBest: Array<IsBoard>;
  fetchPointTransactions: Array<IsPointTransaction>;
  fetchPointTransactionsCountOfBuying: Scalars['Int'];
  fetchPointTransactionsCountOfLoading: Scalars['Int'];
  fetchPointTransactionsCountOfSelling: Scalars['Int'];
  fetchPointTransactionsOfBuying: Array<IsPointTransaction>;
  fetchPointTransactionsOfLoading: Array<IsPointTransaction>;
  fetchPointTransactionsOfSelling: Array<IsPointTransaction>;
  fetchUseditem: IsUseditem;
  fetchUseditemQuestionAnswers: Array<IsUseditemQuestionAnswer>;
  fetchUseditemQuestions: Array<IsUseditemQuestion>;
  fetchUseditems: Array<IsUseditem>;
  fetchUseditemsCountIBought: Scalars['Int'];
  fetchUseditemsCountIPicked: Scalars['Int'];
  fetchUseditemsCountISold: Scalars['Int'];
  fetchUseditemsIBought: Array<IsUseditem>;
  fetchUseditemsIPicked: Array<IsUseditem>;
  fetchUseditemsISold: Array<IsUseditem>;
  fetchUseditemsOfTheBest: Array<IsUseditem>;
  fetchUserLoggedIn: IsUser;
};


export type IsQueryFetchBoardArgs = {
  boardId: Scalars['ID'];
};


export type IsQueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IsQueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IsQueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  search?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};


export type IsQueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchUseditemArgs = {
  useditemId: Scalars['ID'];
};


export type IsQueryFetchUseditemQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemQuestionId: Scalars['ID'];
};


export type IsQueryFetchUseditemQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  useditemId: Scalars['ID'];
};


export type IsQueryFetchUseditemsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchUseditemsIBoughtArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchUseditemsIPickedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IsQueryFetchUseditemsISoldArgs = {
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type IsToken = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
};

export type IsUpdateBoardCommentInput = {
  contents?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
};

export type IsUpdateBoardInput = {
  boardAddress?: InputMaybe<IsBoardAddressInput>;
  contents?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  youtubeUrl?: InputMaybe<Scalars['String']>;
};

export type IsUpdateUseditemInput = {
  contents?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  useditemAddress?: InputMaybe<IsUseditemAddressInput>;
};

export type IsUpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String'];
};

export type IsUpdateUseditemQuestionInput = {
  contents: Scalars['String'];
};

export type IsUpdateUserInput = {
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};

export type IsUseditem = {
  __typename?: 'Useditem';
  _id: Scalars['ID'];
  buyer?: Maybe<IsUser>;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  pickedCount?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  remarks: Scalars['String'];
  seller?: Maybe<IsUser>;
  soldAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  useditemAddress?: Maybe<IsUseditemAddress>;
};

export type IsUseditemAddress = {
  __typename?: 'UseditemAddress';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  zipcode?: Maybe<Scalars['String']>;
};

export type IsUseditemAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IsUseditemQuestion = {
  __typename?: 'UseditemQuestion';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  useditem: IsUseditem;
  user: IsUser;
};

export type IsUseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID'];
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  useditemQuestion: IsUseditemQuestion;
  user: IsUser;
};

export type IsUser = {
  __typename?: 'User';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userPoint?: Maybe<IsUserPoint>;
};

export type IsUserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user: IsUser;
};
