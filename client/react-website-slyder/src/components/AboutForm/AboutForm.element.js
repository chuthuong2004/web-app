import styled from "styled-components"

export const ContentAbout = styled.div`
    margin-top: 84px;
`

export const AboutBackground = styled.div`
    width: 100%;
    img{
        width: 100%;
        max-height: 30vh;
    }

`

export const AboutHeadding = styled.div`
    text-align: center;
    padding: 4rem 18rem;
    opacity: 0.8;
    font-size: 1rem;
    line-height: 1.6;
    outline: none;
    letter-spacing: 1px;
    list-style-type: none;
`

export const AboutInner = styled.div`
    display: flex;
    justify-content: space-around;

    .about{
        img{
            max-width: 70vh;
        }
        .about_item{
            margin-top: 12px;
            
            p{
                font-size: 1rem;
                text-align: center;
                font-weight: 700;
                opacity: 0.8;
            }
        }
    }
`