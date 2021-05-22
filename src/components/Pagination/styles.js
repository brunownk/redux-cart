import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .MuiPagination-ul {
    li {
      button {
        background: #e5e4e6;
        border-color: #e5e4e6;
        border-radius: 7px;
        color: ${Colors.text};
      }

      .MuiPaginationItem-page.Mui-selected {
        background: ${Colors.links};
        border-color: ${Colors.links};
        color: #fff;
      }
    }
  }
`;
