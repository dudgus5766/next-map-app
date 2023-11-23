import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const Header_Height = 60;
export const Section_Padding_Top = 8;

export default function DetailSection() {
  return (
    <Container>
      <HeaderWrapper>
        <ArrowButton disabled>
          <IoIosArrowUp size={20} color="#666666" />
        </ArrowButton>
        <Title>매장을 선택해주세요</Title>
      </HeaderWrapper>
    </Container>
  );
}

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

  transform: translateY(
    calc(100% - ${Header_Height}px - ${Section_Padding_Top}px)
  );
`;

const HeaderWrapper = styled.div`
  height: ${Header_Height}px;

  display: flex;
  flex-direction: column;
`;

const ArrowButton = styled.button`
  height: 20px;
  align-self: center;

  border: none;
  background-color: transparent;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

const Title = styled.p`
  margin: 4px 20px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.boldGray};
`;
