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
  height: 400px;
`;
const Img = styled.img`
  width: 100%;
  height: 400px;
  margin: 0px auto;
  object-fit: cover;
`;
const StyledSlider = styled(Slider)`
  width: 100%;
  height: 400px;
  /* height: 90%; */

  .slick-slide div {
    height: 400px;
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 20px;
  }
  .slick-dots li button::before {
    font-size: 12px;
    color: #fff;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-prev:before {
    font-size: 50px;
    position: absolute;
    left: -100px;
    color: #ccc;
    display: none;
  }

  .slick-next:before {
    font-size: 50px;
    position: absolute;
    right: 100px;
    color: #ccc;
    display: none;
  }
`;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Wrapper>
      <BannerDiv>
        <StyledSlider {...settings}>
          <div>
            <Img src="/banner/banner1.jpg" />
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
