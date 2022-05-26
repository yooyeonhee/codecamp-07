import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  font-size: 30px;
`;
const BannerDiv = styled.div`
  padding: 0px 200px;
`;
const Img = styled.img`
  margin: 0px auto;
`;
const StyledSlider = styled(Slider)`
  height: 90%;

  .slick-slide div {
    height: 300px;
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: -50px;
  }
  .slick-prev:before {
    font-size: 50px;
    position: absolute;
    left: -100px;
    color: #ccc;
  }
  .slick-next:before {
    font-size: 50px;
    position: absolute;
    right: -100px;
    color: #ccc;
  }
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      Banner Area
      <BannerDiv>
        <StyledSlider {...settings}>
          <div>
            <Img src="/banner/banner1.png" />
          </div>
          <div>
            <Img src="/banner/banner2.png" />
          </div>
          <div>
            <Img src="/banner/banner3.png" />
          </div>
          <div>
            <Img src="/banner/banner4.png" />
          </div>
        </StyledSlider>
      </BannerDiv>
    </Wrapper>
  );
}
