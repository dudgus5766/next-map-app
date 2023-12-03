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
        <LinkButton href="/" passHref aria-label="홈으로 이동" key="home">
          <LogoText>맛지도</LogoText>
        </LinkButton>
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
  padding: 10px 12px 0;

  z-index: 100;
  pointer-events: none;
`;

const LinkButton = styled(Link)`
  padding: 5px;
  border: none;
  border-radius: 4px;

  //flex
  ${({ theme }) => theme.MIXINS.flexBox()}

  box-shadow: ${({ theme }) => theme.boxShadow.normal};

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  display: flex;
  pointer-events: auto;
`;

const LogoText = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
`;
