import styled from 'styled-components';

type SpaceProps = {
  size?: number;
  underline?: boolean; // 밑줄을 추가할지 결정
};

const Space = styled.div<SpaceProps>`
  padding-top: ${({ size }) => `${size || 10}px`};
  margin-bottom: ${({ underline, size }) =>
    underline ? `${size || 10}px` : '0px'};
  border-bottom: ${({ underline, theme }) =>
    underline ? `1px solid ${theme.colors.lightGray}` : 'none'};
`;

export default Space;
