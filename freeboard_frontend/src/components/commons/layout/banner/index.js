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
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  margin: 0px auto;
  object-fit: cover;
`;
const StyledSlider = styled(Slider)`
  height: 90%;

  .slick-slide div {
    height: 300px;
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: -20px;
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
    right: 100px;
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
