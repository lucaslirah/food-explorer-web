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

    button:nth-child(3){
        width: 30rem;
    }

    .food_explorer_logo{
        display: flex;
        flex-direction: column;

        >p{
            color: #82F3FF;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 19.20px;

            align-self: flex-end;
        }
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