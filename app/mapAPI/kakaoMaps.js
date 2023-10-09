'use client'

import { useEffect, useState } from 'react';
import '../css/KakaoMaps.css';

export default function KakaoMap() {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=028a4a45448e1a2f02652fee133dd3b7&autoload=false`;
    // mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=028a4a45448e1a2f02652fee133dd3b7&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div className='bg'>
      <div id="map" className='map'></div>
    </div>
  );
}

