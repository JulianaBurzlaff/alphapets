import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
    min-height: 100vh;
    padding-bottom: 30px;
  `}
`;
