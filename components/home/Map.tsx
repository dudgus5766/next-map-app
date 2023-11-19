import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import styled from 'styled-components';
import { NaverMap } from '@/types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import { Coordinates } from '@/types/store';

type MapProps = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: MapProps) => {
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
      <MapBox id={'map'} style={{ width: '100%', height: '100%' }} />
    </>
  );
};

export default Map;

const MapBox = styled.div``;
