import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }

    >svg{
        width: 3.2rem;
        height: 3.2rem;
    }
`;