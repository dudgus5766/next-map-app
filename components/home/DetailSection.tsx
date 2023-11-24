import React, { useState } from 'react';
import useSWR from 'swr';
import styled from 'styled-components';
import DetailHeader from './DetailHeader';
import DetailContent from './DetailContent';
import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import { Header_Height, Section_Padding_Top } from '@/constants/constant';

export default function DetailSection() {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <Container
      className={`${expanded ? 'expanded' : ''} ${
        currentStore ? 'selected' : ''
      } `}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
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
