import Services from "./Services"
import styled from 'styled-components'

export const Container = styled.div`
    .ImagesItem{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        padding: 4rem 8rem;

        .Image{
            img{
                max-width: 100%;
                max-height:50vh;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 20px;
                gap: 1rem;
                transition: 0.4s ease-in-out;

                &:hover{
                    transform: scale(1.1);
                    cursor: pointer;
                    box-shadow: rgba(0,0,0,0.3) 0px 10px 20px;
                }
            }
        }
    }

    .Content{
        text-align: center;
        margin-top: 2rem;
        opacity: 0.8;

        h1{
            font-size: 1.8rem;
            letter-spacing: 0.2rem;
        }

        .ContentAbout-name{
            margin-top: 0.8rem;
            font-weight: 500;
            letter-spacing: 1px;
        }

        .ContentAbout-From{
            margin-top: 0.8rem;
            font-weight: 700;
            font-family: 'Hurricane', cursive;
            font-size: 1.8rem;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        .ImagesItem{
            padding: 2rem 0;
            display: block;
            .Image{
                padding: 12px;
            }
        } 
        .Content{
            h1, .ContentAbout-From{
                font-size: 1.2rem;
            }

            .ContentAbout-name{
                font-size: 1rem;
            }
        }       
    }
`

export default Services.element