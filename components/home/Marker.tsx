import React, { useEffect } from 'react';
import { Marker } from '@/types/map';

export default function Marker({ map, coordinates, icon, onClick }: Marker) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    // map이 있다면 naver map에 새로운 인스턴스 생성
    if (map) {
      /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html */
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
