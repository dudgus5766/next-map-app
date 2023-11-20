import React, { useEffect } from 'react';
import { NaverMap } from '@/types/map';
import { Store } from '@/types/store';

type MarkerProps = {
  map: NaverMap;
  store: Store;
};
export default function Marker({ map, store }: MarkerProps) {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    // map이 있다면 naver map에 새로운 인스턴스 생성
    if (map) {
      /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html */
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...store.coordinates),
      });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]);

  return null;
}
