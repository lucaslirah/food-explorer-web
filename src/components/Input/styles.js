import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    border-radius: .5rem;
    padding: 1.2rem;
    
    >input{
        width: 100%;
        
        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    >svg{
        margin: 0 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`