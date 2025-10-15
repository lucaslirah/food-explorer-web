import styled from "styled-components";
// Certifique-se de que o caminho para seus breakpoints está correto
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

// SEU CÓDIGO ORIGINAL - MANTIDO 100%
export const Container = styled.header`
  grid-area: "header";

  width: 100%;
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  place-items: initial;

  gap: 3.2rem;

  border: none;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  div {
    align-self: center;
  }

  button:nth-child(3) {
    width: 30rem;
  }

  .food_explorer_logo {
    display: flex;
    flex-direction: column;

    > p {
      color: #82f3ff;
      font-size: 1.2rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 19.2px;

      align-self: flex-end;
    }
  }

  /* ================================================= */
  /* ===== ADIÇÃO PARA O LAYOUT MOBILE (NOVO) ======== */
  /* ================================================= */

  /* Por padrão, esconde elementos que são apenas para mobile */
  .mobile-only {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    /* No mobile, removemos a largura máxima para ocupar a tela toda */
    max-width: 100%;
    /* Ajustamos o espaçamento para o layout mobile */
    justify-content: space-between;

    /* Escondemos o conteúdo do desktop */
    > .desktop-only {
      display: none;
    }

    /* Mostramos os elementos do mobile */
    .mobile-only {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    /* Estilo do botão de recibo/pedidos */
    .receipt-button {
      position: relative;
      > span {
        position: absolute;
        top: -0.8rem;
        right: -0.8rem;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        font-size: 1.4rem;
        display: grid;
        place-content: center;
      }
    }
  }
`;

// SEU CÓDIGO ORIGINAL - MANTIDO 100%
export const SignOut = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: white;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

// NOVO COMPONENTE DE ESTILO - ADICIONADO NO FINAL
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: flex;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};

  > header {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    font-size: 2.1rem;

    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > main {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      text-decoration: none;
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      font-size: 2.4rem;
      font-weight: 300;
    }
  }
`;
