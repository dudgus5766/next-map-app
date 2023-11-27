import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { Store } from '@/types/store';
import { Header_Height } from '@/constants/constant';

type DetailSectionProps = {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
};

export default function DetailSection({
  currentStore,
  expanded,
  onClickArrow,
}: DetailSectionProps) {
  return (
    <HeaderWrapper>
      <ArrowButton
        expanded={expanded}
        onClick={onClickArrow}
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
  );
}

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
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
`;
