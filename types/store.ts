type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type Menu = { name: string; price: string };
export type Store = {
  nid: number;
  name: string;
  description: string;
  season: number;
  episode: number;
  coordinates: Coordinates; //위경도
  images: string[]; //대표 이미지
  characteristic: string; //키워드
  foodKind: string; //음식 카테고리
  address: string;
  phone: string;
  menus: Menu[];
};
