import styled, { css } from 'styled-components';

export const Phrase = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    margin: 150px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Pets = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;
