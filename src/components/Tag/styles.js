import styled from "styled-components";

export const Container = styled.span`
    font-size: clamp(1rem, 1vw, 1.4rem);
    font-weight: 500;

    padding: .8rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: .5rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
`