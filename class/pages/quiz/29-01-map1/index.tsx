import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function mapOnePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=728269a2fa25207c4edff6de4d92eea2&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.6714, 126.8072), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerPosition = new window.kakao.maps.LatLng(37.6714, 126.8072); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커 이미지
        const markerImage = new window.kakao.maps.MarkerImage(
          "/29-quiz/point.png",
          new window.kakao.maps.Size(31, 35),
          new window.kakao.maps.Point(13, 34)
        );
        marker.setImage(markerImage);

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return <div id="map" style={{ width: 1000, height: 800 }}></div>;
}
