import Map from './Map';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import Markers from '@/components/home/Markers';
import useCurrentStore from '@/hooks/useCurrentStore';

export default function MapSection() {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      {/*지도 위의 markers들을 보여주는 컴포넌트*/}
      <Markers />
    </>
  );
}
