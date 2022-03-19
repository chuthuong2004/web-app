import Services from "./Services"
import styled from 'styled-components'

export const Container = styled.div`
    .ImagesItem{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        padding: 4rem 0;

        .Image{
            img{
                max-width: 100%;
                max-height:50vh;
                box-shadow: 0.6rem 0.2rem 0.6rem #ccc;
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
        margin-top: 4rem;
        opacity: 0.8;

        h1{
            font-size: 1.8rem;
            letter-spacing: 0.2rem;
        }

        p{
            margin-top: 0.8rem;
            font-weight: 700;
            letter-spacing: 1px;
        }

        .ContentAbout-From{
            margin-top: 0.8rem;
            font-family: 'Hurricane', cursive;
            font-size: 1.8rem;
        }
    }
`

export default Services.element