import React from 'react';
import useSWR from 'swr';
import Marker from '@/components/home/Marker';
import { STORE_KEY } from '@/hooks/useStores';
import { MAP_KEY } from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import { Store } from '@/types/store';

export default function Markers() {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if (!map || !stores) return null;

  return (
    <>
      {stores?.map((store) => {
        return <Marker map={map} store={store} key={store.nid} />;
      })}
    </>
  );
}
