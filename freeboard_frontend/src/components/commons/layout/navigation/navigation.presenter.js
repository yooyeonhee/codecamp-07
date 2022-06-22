import * as S from "./navigation.styles";
import { Fragment } from "react";

export default function LayoutNavigationUI(props) {
  const NAVIGATION_MENUS = [
    { name: "market", page: "/market" },
    { name: "boards", page: "/boards" },
    { name: "myPage", page: "/mypage" },
    { name: "myAPI", page: "/myApi" },
  ];

  return (
    <S.Wrapper>
      {" "}
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
