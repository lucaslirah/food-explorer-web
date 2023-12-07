import styled from "styled-components";

export const Container = styled.header`
    grid-area: "header";

    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: initial;
    
    gap: 3.2rem;
    
    border: none;
    padding: 3rem 12rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    div{   
        align-self: center;
    }
`;

export const SignOut = styled.button`
        display: flex;
        align-items: center;

        border: none;
        background: none;
        color: white;

        >svg{
        width: 3.2rem;
        height: 3.2rem;
        }
`;