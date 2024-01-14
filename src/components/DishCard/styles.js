import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    width: 30rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: .8rem;
    padding: 2.4rem;

    >svg{
        position: absolute;
        right: 2rem;
        top: 2rem;
        cursor: pointer;
    }

    img{
        width: 17.6rem;
        border-radius: 50%;
    }

    h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 2.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 3rem;
    }

    .description{
        color:  ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 2rem;
    }

    .price{
        color:  ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
        font-size: 3.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 5rem;
    }

    .order_control{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;

        margin-top: 4rem;

        button{
            width: fit-content;
        }
        .control{
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        span{
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    a:nth-child(1){
        align-self: end;
        color: white;
    }
`;