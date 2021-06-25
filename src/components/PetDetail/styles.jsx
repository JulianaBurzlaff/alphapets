import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    height: 250px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  border-radius: 50%;
  margin-top: 30px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 100px 0;
`;

export const Name = styled.div`
  font-size: 50px;
`;

export const Data = styled.div`
  display: flex;
`;

export const Data1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Data2 = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const Bold = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;
