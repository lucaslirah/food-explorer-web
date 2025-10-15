import styled from "styled-components";

export const Container = styled.footer`
  grid-area: "footer";

  width: 100%;
  height: 7rem;

  max-width: 112rem; /* Define a mesma largura máxima */
  margin: 0 auto; /* Centraliza o rodapé */

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 0 2rem;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;
