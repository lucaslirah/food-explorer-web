import styled from "styled-components";

export const Container = styled.div`
    .item_1{
        min-width: 22rem;
    }
    .item_2{
        width: 100%;
    }
    .item_3{
        width: 36rem;
    }
    .item_4{
        width: 100%;
    }
    .item_5{
        min-width: 25rem;
    }
`;

export const Form = styled.form`
    padding: 4rem 12rem;

    h1{
        margin: 2.4rem 0 3.2rem;
        font-size: 3.2rem;
    }

    .ingredients{
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        padding: .4rem .8rem;
        border-radius: .8rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .form_buttons{
        display: flex;
        justify-content: end;
        gap: 3.2rem;

        button:nth-child(1){
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
        button:nth-child(2){
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
        }
    }
`;

export const Picture = styled.div`
    position: relative;
    
    input{
        display: none;
    }
    
    div{
        border-radius: .8rem;    
        cursor: pointer;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 3.2rem;

    input{
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
    span{
        margin-bottom: 1.6rem;
        display: block;
    }

    .inputs_wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
`;