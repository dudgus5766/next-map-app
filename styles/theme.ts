import { DefaultTheme } from 'styled-components';

const fontWeight = {
  light: 300,
  medium: 500,
  bold: 600,
} as const;

const colors = {
  white: '#FFFFFF',
  lightGray: '#AEB5BC',
  gray: '#676D74',
  boldGray: '#353A3F',
  blue: '#40a6fd',
} as const;

const boxShadow = {
  normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
  purple: '0 3px 8px 0 #d6c9ff',
  blue: '0 3px 8px 0 #b3e2e6',
} as const;

const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },

  positionFullScreen: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
} as const;

export const theme: DefaultTheme = {
  fontWeight,
  colors,
  boxShadow,
  MIXINS,
};
