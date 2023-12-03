import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Map from './Map';
import Markers from '@/components/home/Markers';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import useCurrentStore from '@/hooks/useCurrentStore';
import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';

export default function MapSection() {
  /** url query로 부터 initial Zoom, Center 값 설정 후 지도 이동 목적 */
  const router = useRouter();

  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line react-hooks/exhaustive-deps
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );

  /** onLoadMap */
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      {/*지도 위의 markers들을 보여주는 컴포넌트*/}
      <Markers />
    </>
  );
}
