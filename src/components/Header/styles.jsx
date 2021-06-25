import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  `}
`;
