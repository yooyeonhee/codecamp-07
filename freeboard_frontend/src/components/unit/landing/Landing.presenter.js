import * as S from "./Landing.styles";
export default function LandingUI(props) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Sky>
          <S.Sun src="landing/sun.png" />
          <S.Cloud1 src="landing/cloud1.png" />
          <S.Cloud2 src="landing/cloud2.png" />
        </S.Sky>
        <S.Town>
          <S.Circle src="landing/circle.png" />
          <S.Night src="landing/town_night.png" />
          <S.Day src="landing/town_day.png" />
        </S.Town>
        <S.People>
          <S.Family src="landing/family.png" />
          <S.Man src="landing/man.png" />
        </S.People>
        <S.Button onClick={props.onClickGoPage}>click here!</S.Button>
      </S.Wrapper>
    </S.Body>
  );
}
