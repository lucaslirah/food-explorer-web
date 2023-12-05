import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;

    display: grid;
    grid-template-rows: 11rem auto;
    grid-template-areas: 
    "header",
    "content"
    ;

    main{
        grid-area: "content";
    }
`;