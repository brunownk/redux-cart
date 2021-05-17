import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import { sizes } from '~/styles/configs/grid';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.tr`
  animation: 1s ${fadeInAnimation};
  position: relative;

  @media ${sizes.sm} {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;
