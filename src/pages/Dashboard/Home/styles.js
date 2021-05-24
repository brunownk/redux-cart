import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    margin-right: 23px;
  }

  .MuiGrid-container {
    margin-bottom: 58px;
  }

  .MuiGrid-item:hover {
    transform: translate(0, -3px);
  }
`;
