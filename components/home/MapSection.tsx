import Map from './Map';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import Markers from '@/components/home/Markers';

export default function MapSection() {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      {/*지도 위의 markers들을 보여주는 컴포넌트*/}
      <Markers />
    </>
  );
}
