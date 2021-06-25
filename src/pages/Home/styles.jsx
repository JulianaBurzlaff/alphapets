import styled, { css } from 'styled-components';
import Button from '../../components/Button';

export const StyledButton = styled(Button)`
  width: 125px;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  display: flex;
  width: 500px;
  height: 650px;
`;

export const Phrase = styled.h2`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    font-weight: 100;
    width: 200px;
    margin: 50px 300px 125px 0;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  max-width: 270px;
  justify-content: space-between;
`;
