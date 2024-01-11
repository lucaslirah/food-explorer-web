import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    h2{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6rem;
     }
    >div{
        width: 100%;
        display: flex;
        align-items: center;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        border-radius: .5rem;
        padding: 1.2rem;
        border: ${({ theme, $isLogin }) => $isLogin ? `1px solid ${theme.COLORS.LIGHT_100}` : "none"};
        
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
            font-size: 2rem;
        }
    }
`