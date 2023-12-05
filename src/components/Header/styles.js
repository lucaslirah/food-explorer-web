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

    button{
        width: 21rem;
    }

    >img{
        width: 19rem;
    }

    div{
        display: flex;
        align-items: center;

        >svg{
        width: 3.2rem;
        height: 3.2rem;
    }
    }
`;