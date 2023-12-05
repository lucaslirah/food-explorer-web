import styled from "styled-components";

export const Container = styled.header`
    grid-area: "header";

    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border: none;
    padding: 2.4rem 12rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    button{
        width: 21rem;
    }

    >img{
        width: 19rem;
    }

    >svg{
        width: 3.2rem;
        height: 3.2rem;
    }
`;