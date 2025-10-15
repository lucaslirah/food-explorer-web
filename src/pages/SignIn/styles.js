import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  img {
    width: 25rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column; /* 1. Coloca o logo em cima do formulário */
    justify-content: center;
    gap: 5rem; /* 2. Adiciona um espaço entre eles */
    padding: 0 4rem; /* 3. Evita que o form cole nas laterais */
    max-width: 50rem;
    margin: 0 auto; /* Centraliza o container */

    /* Opcional: diminuir o logo no mobile */
    img {
      width: 20rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  padding: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 0.8rem;

  min-width: 500px;

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 4rem;
    word-wrap: break-word;
  }

  h1,
  a {
    align-self: center;
  }
  a button {
    font-size: 1.4rem;
    font-weight: 500;
  }

  label span {
    margin-bottom: 0.8rem;
    display: block;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.6rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    background-color: transparent; /* 4. Remove o fundo da "caixa" */
    padding: 0; /* 5. Remove o espaçamento interno */
    min-width: 100%; /* 6. Faz o form ocupar a largura toda */

    h1 {
      display: none; /* 7. Esconde o título "Faça login" */
    }
  }
`;
