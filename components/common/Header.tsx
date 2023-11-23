import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type HeaderProps = {
  rightElements?: React.ReactElement[];
};

export default function HeaderComponent({ rightElements }: HeaderProps) {
  return (
    <Header>
      <Container>
        <Link href="/">
          <LogoText>맛지도</LogoText>
        </Link>
      </Container>

      {rightElements && <Container>{rightElements}</Container>}
    </Header>
  );
}

const Header = styled.div`
  //position
  ${({ theme }) => theme.MIXINS.positionFullScreen}

  //flex
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}

  width: 100%;
  height: 48px;
  padding: 0 8px 0 12px;

  z-index: 100;
  pointer-events: none;
`;

const Container = styled.div`
  display: flex;
  pointer-events: auto;
`;

const LogoText = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
`;
