import { Coordinates, Store } from '@/types/store';

export type NaverMap = naver.maps.Map;

export type ImageIcon = naver.maps.ImageIcon;

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick: () => void;
};
