import React from 'react';
import useSWR from 'swr';
import Marker from '@/components/home/Marker';
import { STORE_KEY } from '@/hooks/useStores';
import { MAP_KEY } from '@/hooks/useMap';
import { NaverMap, ImageIcon } from '@/types/map';
import { Store } from '@/types/store';

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3; //이미지 원본 사이즈가 커 scale을 사용해 조절

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export default function Markers() {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);
  console.log('stores>>>', stores);
  const generateStoreMarkerIcon = (markerIndex: number): ImageIcon => {
    return {
      /** TODO: store.foodKind을 사용한 아이콘 이미지 제작 후 사용 예정**/
      url: 'images/markers.png',
      size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT), //하나의 아이콘에 대한 사이즈
      origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0), //스프라이트 이미지에서 몇번째 아이콘을 사용할 것인지 지정(markerIndex로 결정)
      scaledSize: new naver.maps.Size(
        SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
        SCALED_MARKER_HEIGHT
      ),
    };
  };

  const onClickMarker = (store: Store) => {
    const position = new naver.maps.LatLng(...store.coordinates);
    // 선택한 마커로 부드럽게 이동합니다.
    map?.panTo(position, { duration: 450 });
  };

  if (!map || !stores) return null;

  return (
    <>
      {stores?.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={generateStoreMarkerIcon(store.season)}
            onClick={() => onClickMarker(store)}
            key={store.nid}
          />
        );
      })}
    </>
  );
}
