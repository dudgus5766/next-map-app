import React, { useEffect } from 'react';
import Link from 'next/link';
import { NextSeo, NextSeoProps } from 'next-seo';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Header from '@/components/common/Header';
import MapSection from '@/components/home/MapSection';
import DetailSection from '@/components/home/DetailSection';
import useStores from '@/hooks/useStores';
import { Store } from '@/types/store';

type HomeProps = {
  stores: Store[];
};

export default function Home({ stores }: HomeProps) {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <NextSeo
        title="매장 지도"
        description="맛있는 식당을 알려주는 지도 서비스입니다."
      />
      {/*헤더 부분*/}
      <Header
        rightElements={[
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
        <DetailSection />
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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
