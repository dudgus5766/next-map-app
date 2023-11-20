import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '@/components/common/Header';
import MapSection from '@/components/home/MapSection';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';

type HomeProps = {
  stores: Store[];
};

export default function Home({ stores }: HomeProps) {
  const { initializeStores } = useStores();

  const onClick = () => {
    alert('복사가 되었습니다.');
  };

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      {/*헤더 부분*/}
      <Header
        rightElements={[
          <BoxButton onClick={onClick} style={{ marginRight: 8 }} key="button">
            <FaCopy size={20} />
          </BoxButton>,
          <Link href="/feedback" passHref key="link">
            <BoxButton>
              <FaExternalLinkAlt size={20} />
            </BoxButton>
          </Link>,
        ]}
      />

      {/*지도 부분*/}
      <MainContainer>
        <MapSection />
      </MainContainer>
    </>
  );
}

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 (추후 업데이트 예정)**/

  const stores = (await import('../public/mockStoreData.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60, //매장 데이터는 빠르게 바뀌는 값이 아니기 때문에 1시간으로
  };
}

const BoxButton = styled.button`
  padding: 6px;
  border: none;
  border-radius: 4px;

  //flex
  ${({ theme }) => theme.MIXINS.flexBox()}

  box-shadow: ${({ theme }) => theme.boxShadow.normal};

  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
  }

  transition: background-color 200ms ease;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
