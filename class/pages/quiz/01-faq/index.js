import {
  Rectangle,
  Wrapper,
  SearchBar,
  MyProfile,
  Title,
  InfoProfile,
  Photo,
  Name,
  MenuBar,
  CssMenu,
  Menu,
  MainWrapper,
  SubWrapper,
  QesBox,
  QesNum,
  QesTitle,
  NavWrapper,
  NavCon,
  NavTitle,
  MyNavTitle,
} from "../../../styles/faq";
export default function MyPage() {
  //  s여기는 자바스크립트 쓰는곳
  return (
    <Rectangle>
      <Wrapper>
        <SearchBar>
          <img src="/01-faq/search.png" width={32} height={32} />
        </SearchBar>
        <MyProfile>
          <Title>마이</Title>
          <InfoProfile>
            <Photo>
              <img src="/01-faq/profile.png" />
            </Photo>
            <Name>임정아</Name>
            <img src="/01-faq/arrow1.png" width={28} height={28} />
          </InfoProfile>
        </MyProfile>
        <MenuBar>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <CssMenu>FAQ</CssMenu>
          <Menu>Q&A</Menu>
        </MenuBar>
      </Wrapper>
      <MainWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.01</QesNum>
            <QesTitle>리뷰 작성은 어떻게 하나요?</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.02</QesNum>
            <QesTitle>리뷰 수정/삭제는 어떻게 하나요?</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.03</QesNum>
            <QesTitle>아이디/비밀번호를 잊어버렸어요.</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.04</QesNum>
            <QesTitle>회원탈퇴를 하고싶어요.</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.05</QesNum>
            <QesTitle>출발지 설정은 어떻게 하나요?</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
        <SubWrapper>
          <QesBox>
            <QesNum>Q.06</QesNum>
            <QesTitle>비밀번호를 변경하고 싶어요.</QesTitle>
          </QesBox>
          <img src="/01-faq/arrow2.png" width={60} height={60} />
        </SubWrapper>
      </MainWrapper>
      <NavWrapper>
        <NavCon>
          <img src="/01-faq/home.png" width={58} height={58} />
          <NavTitle>홈</NavTitle>
        </NavCon>
        <NavCon>
          <img src="/01-faq/location.png" width={58} height={58} />
          <NavTitle>잇츠로드</NavTitle>
        </NavCon>
        <NavCon>
          <img src="/01-faq/like.png" width={58} height={58} />
          <NavTitle>마이찜</NavTitle>
        </NavCon>
        <NavCon>
          <img src="/01-faq/main.png" width={58} height={58} />
          <MyNavTitle>마이</MyNavTitle>
        </NavCon>
      </NavWrapper>
    </Rectangle>
  );
}
