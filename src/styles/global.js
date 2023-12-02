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
        transition: filter .3s;
    }

    button:hover, a:hover{
        filter: brightness(.9);
    }

    body, button, input, textarea{
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }
`