import styled from 'styled-components';
import { sizes } from '~/styles/configs/grid';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${sizes.sm} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;

  height: 28px;
  width: 28px;
  border-radius: 4px;

  svg {
    pointer-events: none;

    font-size: 20px;
  }
`;

export const DeleteButton = styled(ActionButton)`
  background-color: transparent;

  svg { color: red; }
`;

export const EditButton = styled(ActionButton)`
  background-color: transparent;

  svg {
    color: #d0c9d6;
  }
`;

export const ViewButton = styled(ActionButton)`
  background-color: transparent;

  svg {
    color: #d0c9d6;
  }
`;

export const DuplicateButton = styled(ActionButton)`
  background-color: transparent;

  svg {
    color: #d0c9d6;
  }
`;
