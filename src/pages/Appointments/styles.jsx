import styled, { css } from 'styled-components';

export const Phrase = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    margin: 100px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
