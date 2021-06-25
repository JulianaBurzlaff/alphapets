import styled, { css } from 'styled-components';

export const Logo = styled.img`
  ${({ width, height }) => css`
    height: ${height};
    width: ${width};
  `}
`;
