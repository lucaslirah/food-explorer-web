import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    img{
        width: 25rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.2rem;

    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: .8rem;

    min-width: 500px;

    h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 3.2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 4rem;
        word-wrap: break-word
    }

    h1, button:nth-child(even){
        align-self: center;
    }
    button:nth-child(even){
        font-size: 1.4rem;
        font-weight: 500;
    }
`;