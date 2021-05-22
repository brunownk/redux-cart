import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 16px;

  border: 1px solid ${Colors.card_border};
  border-radius: 7px;
`;

export const LogoImg = styled.img`
  width: 68px;
  height: 67px;
  border-radius: 7px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

export const EstablishmentName = styled.p`
  font-size: 13px;
  line-height: 18px;
  color: #6d5d7a;
`;

export const Category = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: ${Colors.links};
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 14px;
`;
