import Header from '../components/common/Header';
import Link from 'next/link';
import styled from 'styled-components';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import MapSection from '../components/home/MapSection';

export default function Home() {
  const onClick = () => {
    alert('복사가 되었습니다.');
  };

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
