import styled from 'styled-components';

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: #0066ff;
`;

export const Container = styled.button`
  cursor: pointer;
  position: relative;
  /* position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%); */
  border: none;
  background-color: transparent;

  &:hover {
    :before {
      content: 'Sair';
      position: absolute;
      bottom: 0;
      right: 50%;
      padding: 5px 7px;
      border-radius: 3px;
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.8);
      transform: translate(50%, 100%);
    }

    &:after {
      content: '';
      position: absolute;

      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);

      width: 0;
      height: 0;

      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid rgba(0, 0, 0, 0.8);
    }

    svg {
      color: #ff3b30;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  svg {
    pointer-events: none;
    font-size: 24px;
    color: #fafafa;
  }
`;
