import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 100vh;

    font-family: 'Poppins', sans-serif;

    display: grid;
    grid-template-rows: 11rem auto 7rem;
    grid-template-areas: 
    "header",
    "content",
    "footer"
    ;

    main{
        grid-area: "content";

        padding: 2rem 12rem 0 12rem;

        overflow-y: auto;
    }
`;

export const DishInfo = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5rem;

        padding-top: 4rem;

        >img{
            width: 39rem;
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
        }

        .tags{
            display: flex;
            flex-wrap: wrap;
        }

        h1{
            font-size: 4rem;
            font-weight: 500;
        }
        p{
            margin: 2.4rem 0;
        }
`;