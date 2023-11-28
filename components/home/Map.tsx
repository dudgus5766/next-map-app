import React, { useRef } from 'react';
import Script from 'next/script';
import styled from 'styled-components';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';
import { Header_Height, Section_Padding_Top } from '@/constants/constant';

type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
export default function Map({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: MapProps) {
  const mapRef = useRef<NaverMap | null>(null);
  const initializeMap = () => {
    const location = new naver.maps.LatLng(...initialCenter);

    const mapOptions = {
      center: location, // 처음 위치
      zoom: initialZoom,
      zoomControl: true, // 줌 설정
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html */
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <MapBox id={'map'} />
    </>
  );
}

const MapBox = styled.div`
  width: 100%;
  height: 100%;

  & > div:nth-of-type(n + 2):nth-of-type(-n + 3) {
    bottom: ${Header_Height + Section_Padding_Top}px !important;
  }
`;
