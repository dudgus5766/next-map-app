import React from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { Store } from '@/types/store';
import { Header_Height } from '@/constants/constant';
import copy from 'copy-to-clipboard';

type DetailHeaderProps = {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
};

export default function DetailHeader({
  currentStore,
  expanded,
  onClickArrow,
}: DetailHeaderProps) {
  const onClickCopy = () => {
    copy(location.origin + '/' + currentStore?.name, {
      debug: true,
      message: 'Press #{key} to copy',
    });
    // alert('복사 되었습니다.');
  };

  return (
    <HeaderContainer>
      <ArrowButton
        expanded={expanded}
        onClick={onClickArrow}
        disabled={!currentStore}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </ArrowButton>
      {currentStore ? (
        <UpperWrapper>
          <Title>{currentStore.name}</Title>
          <BoxButton onClick={onClickCopy}>
            <AiOutlineShareAlt size={20} />
          </BoxButton>
        </UpperWrapper>
      ) : (
        <Title>매장을 선택해주세요</Title>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: ${Header_Height}px;
  padding: 0 20px;
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

const UpperWrapper = styled.div`
  //flex
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
`;

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