import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.contrastText};
    color: ${theme.palette.text.primary};
    width: 200px;
    height: 250px;
    border: 1px solid #e6e6f0;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 10px 10px;
  `}
`;

export const Image = styled.img`
  width: 200px;
  height: 190px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
`;

export const Name = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;
