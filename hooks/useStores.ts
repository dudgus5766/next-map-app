import { useCallback } from 'react';
import { mutate } from 'swr';
import { Store } from '@/types/store';

export const STORE_KEY = '/stores';

const useStores = () => {
  //매장 데이터를 인자로 받아 데이터를 전역상태로 저장하는 함수
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);

  return {
    initializeStores,
  };
};
export default useStores;
