import styled from "styled-components";

export const Container = styled.div`

position: relative;
    svg{
        position: absolute;
        top: .5rem;
        right: 1rem;

        font-size: 2.4rem;
    }
    select{
        width: 100%;

        padding: 1.5rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: .8rem;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;