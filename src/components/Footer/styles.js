import styled from "styled-components";

export const Container = styled.footer`
    grid-area: "footer";

    width: 100%;
    height: 7rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    padding: 0 12rem;

    p{
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
`;