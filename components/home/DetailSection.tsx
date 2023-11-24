import React, { useState } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';

export const Header_Height = 60;
export const Section_Padding_Top = 8;

export default function DetailSection() {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <Container
      className={`${expanded ? 'expanded' : ''} ${
        currentStore ? 'selected' : ''
      } `}
    >
      <HeaderWrapper>
        <ArrowButton
          expanded={expanded}
          onClick={() => setExpanded(!expanded)}
          disabled={!currentStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </ArrowButton>
        {currentStore ? (
          <Title>{currentStore.name}</Title>
        ) : (
          <Title>매장을 선택해주세요</Title>
        )}
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

  transition: transform 500ms;
  transform: translateY(
    calc(100% - ${Header_Height}px - ${Section_Padding_Top}px)
  );

  &.selected {
    transform: translateY(calc(100% - 160px));
  }

  &.expanded {
    transform: translateY(0);
  }
`;

const HeaderWrapper = styled.div`
  height: ${Header_Height}px;

  display: flex;
  flex-direction: column;
`;

const ArrowButton = styled.button<{ expanded: boolean }>`
  height: 20px;
  align-self: center;

  border: none;
  background-color: transparent;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  transform: ${(props) => (props.expanded ? `rotate(180deg)` : 0)};
`;

const Title = styled.p`
  margin: 4px 20px;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.boldGray};
`;
