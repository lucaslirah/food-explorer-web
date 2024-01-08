import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11rem auto 7rem;
    grid-template-areas: 
    "header",
    "content",
    "footer"
    ;

    main{
        width: 100%;
        grid-area: "content";

        padding: 3rem 7rem;

        >img{
            width: 100px;
            display: block;
        }

        .swiper {
            width: 1200px;
            height: fit-content;

            position: relative;
        }
        .slide_item{
            margin: 0 1rem;
        }
        .swiper::before{
            content: '';
            width: 35rem;
            height: 100%;
            position: absolute;

            z-index: 2;

            background: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
            transform: rotate(180deg);
        }
        .swiper::after{
            content: '';
            width: 35rem;
            height: 100%;
            position: absolute;

            right: 0;
            top: 0;

            z-index: 2;

            background: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
        }
        .swiper-button-prev::after, .swiper-button-next::after{
            color: white;
        }
    }
`;

export const Banner = styled.div`
    width: 100%;
    height: 25rem;

    position: relative;
    overflow: hidden;
    
    >img{
        position: absolute;

        width: 40rem;
        height: auto;

        left: 2rem;

        transform: scaleX(-1);
        filter: opacity(.8);
    }

    .rec_banner{
        width: 94%;
        height: 200px;

        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        border-radius: .8rem;

        position: absolute;
        right: 0;
        bottom: 0;
        
        display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;

            

        div{
            max-width: 440px;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            margin-right: 10rem;
            
            h1{
                font-family: 'Poppins', sans-serif;
                line-height: 56px;
                font-weight: 500;
                font-size: 4rem;
            }

            span{
                font-size: 1.6rem;
                font-weight: 400;
            }
        }
    }
`;

