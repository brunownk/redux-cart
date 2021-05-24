import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;

  @media (max-width: 1050px) {
    flex-direction: column !important;
  }
`;
