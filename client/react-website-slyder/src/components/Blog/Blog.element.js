import styled from 'styled-components'

export const Container = styled.div`
    .Content{
        text-align: center;
        margin-top: 6rem;
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

    .ImagesItem{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        padding: 2rem 8rem;
        .Image{
            img{
                margin-right: -8rem;
                margin-left: -8rem;
                max-width: 459px;
                max-height: 367px;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 20px;
                cursor: pointer;
            }
        }
    }
`