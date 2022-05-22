import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  // any 는 어떤 데이터가 들어와도 상관 없다. (js로 동작)
  // 가급적 안쓰는 것을 권장
  boardData?: any; // boardData가 있을 수도 있고 없을 수도 있다.
}

export interface IMyVariables {
  number?: number;
  writer?: string;
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void; // 함수의 리턴이 없는 경우
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGraphqlApi: () => void;
  onClickUpdate: () => void;
  data: {
    number?: number;
    _id?: string;
    message?: string;
  };
  boardData?: any;
  isEdit: boolean;
}
