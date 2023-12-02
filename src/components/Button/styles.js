import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;

    &:disabled{
        opacity: .5;
    }
`