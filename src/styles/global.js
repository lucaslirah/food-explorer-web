import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 65%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: all .3s;
    }

    a:hover{
        filter: brightness(.9);
    }

    body, input, textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        outline: none;
    }
    button{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
    }
`