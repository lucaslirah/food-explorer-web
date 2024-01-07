import styled from "styled-components";

export const Container = styled.section`
    margin-top: 5rem;

    h2{
        font-size: 3.2rem;
        margin-bottom: 2rem;
    }

    .dish_cards{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.7rem;

        overflow-x: auto;
    }
`;