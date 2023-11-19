import Header from '../components/common/Header';
import Link from 'next/link';
import styled from 'styled-components';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  const onClick = () => {
    alert('복사가 되었습니다.');
  };

  return (
    <>
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
      <main></main>
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
