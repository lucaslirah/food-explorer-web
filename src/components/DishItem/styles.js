import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: .8rem;

    padding-right: 2rem; 

    >button{
        background: none;
        border: none;
    }

    >input{
        padding: 1rem 1.6rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        background-color: transparent;
        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    .button_add{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .button_delete{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;