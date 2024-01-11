import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17rem;

    padding: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-radius: .8rem;
    border: none;

    resize: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;