import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;

    border: none;
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-weight: 700;

    svg{
        font-size: 2.5rem;
    }
`;