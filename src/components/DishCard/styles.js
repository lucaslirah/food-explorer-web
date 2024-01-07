import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: .8rem;
    padding: 2.4rem;

    img{
        width: 17.6rem;
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
`;