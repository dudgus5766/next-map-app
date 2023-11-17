import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
const HeaderComponent = () => {
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <LogoText>맛지도</LogoText>
        </Link>
      </LogoContainer>
    </Container>
  );
};
export default HeaderComponent;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  //flex
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}

  width: 100%;
  height: 48px;
  padding: 0 8px 0 12px;

  z-index: 100;
  pointer-events: none;
`;

const LogoContainer = styled.div`
  width: 100%;
`;

const LogoText = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
