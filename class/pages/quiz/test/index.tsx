// // import Head from "next/head";
// import { useEffect } from "react";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

// export default function KakaoMapPage() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=387b6d057e55c68fad491f03d9433f43&libraries=services&autoload=false`;
//     document.head.appendChild(script);

//     script.onload = () => {
//       window.kakao.maps.load(function () {
//         const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
//         const options = {
//           // 지도를 생성할 때 필요한 기본 옵션
//           center: new window.kakao.maps.LatLng(37.6714, 126.8072), // 지도의 중심좌표.
//           level: 3, // 지도의 레벨(확대, 축소 정도)
//         };
//         const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

//         const geocoder = new window.kakao.maps.services.Geocoder();

//         function searchDetailAddrFromCoords(coords, callback) {
//           // 좌표로 법정동 상세 주소 정보를 요청합니다
//           geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
//         }

//         geocoder.addressSearch(
//           "제주특별자치도 제주시 첨단로 242",
//           function (result, status) {
//             // 정상적으로 검색이 완료됐으면
//             if (status === window.kakao.maps.services.Status.OK) {
//               const coords = new window.kakao.maps.LatLng(
//                 result[0].y,
//                 result[0].x
//               );

//               // 결과값으로 받은 위치를 마커로 표시합니다
//               const marker = new window.kakao.maps.Marker({
//                 map: map,
//                 position: coords,
//               });

//               window.kakao.maps.event.addListener(
//                 map,
//                 "click",
//                 function (mouseEvent) {
//                   searchDetailAddrFromCoords(
//                     mouseEvent.latLng,
//                     function (result, status) {
//                       if (status === window.kakao.maps.services.Status.OK) {
//                         const detailAddr = !!result[0].road_address
//                           ? console.log(result[0].road_address.address_name)
//                           : console.log("no");

//                         // 마커를 클릭한 위치에 표시합니다
//                         marker.setPosition(mouseEvent.latLng);
//                         marker.setMap(map);
//                       }
//                     }
//                   );
//                 }
//               );
//               // window.kakao.maps.event.addListener(
//               //   map,
//               //   "click",
//               //   function (mouseEvent) {
//               //     // 클릭한 위도, 경도 정보를 가져옵니다
//               //     const latlng = mouseEvent.latLng;

//               //     // 마커 위치를 클릭한 위치로 옮깁니다
//               //     marker.setPosition(latlng);
//               //   }
//               // );

//               // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//               map.setCenter(coords);
//             }
//           }
//         );
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div id="map" style={{ width: 500, height: 400 }}></div>
//     </>
//   );
// }
