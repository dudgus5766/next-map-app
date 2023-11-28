import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import DetailHeader from '@/components/home/DetailHeader';
import DetailContent from '@/components/home/DetailContent';
import useCurrentStore from '@/hooks/useCurrentStore';
import { Section_Padding_Top } from '@/constants/constant';
import type { Store } from '@/types/store';

type StoreDetailProps = {
  store: Store;
};

const StoreDetail: NextPage<StoreDetailProps> = ({ store }) => {
  const expanded = true;
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };
  return (
    <Container className={`${expanded ? 'expanded' : ''} `}>
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </Container>
  );
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/mockStoreData.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/mockStoreData.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};

const Container = styled.div`
  // position
  ${({ theme }) => theme.MIXINS.positionFullScreen}

  width: 100%;
  height: 100%;
  z-index: 101;

  padding: ${Section_Padding_Top};
  background-color: white;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);

  transition: transform 500ms;
  transform: translateY(0);
`;
