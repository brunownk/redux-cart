import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

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

export const Search = styled.div`
  width: 303px;
  height: 45px;
  padding: 13px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #e5e4e6;
  border-radius: 7px;
  margin-bottom: 33px;

  svg {
    width: 19px;
    margin-left: 5px;
    color: #d0c9d6;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  border: none;
  font-size: 13px;
  line-height: 19px;
  color: ${Colors.input_label};
`;
