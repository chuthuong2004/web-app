import styled from "styled-components"

export const ContentAbout = styled.div`
    
`

export const AboutBackground = styled.div`
    width: 100%;
    img{
        margin-top: 84px;
        width: 100%;
        max-height: 30vh;
    }

`

export const AboutHeadding = styled.div`
    text-align: center;
    padding: 0 18rem;
    padding-top: 4rem;
    opacity: 0.8;
    font-size: 1rem;
    line-height: 1.6;
    outline: none;
    letter-spacing: 1px;
    list-style-type: none;
`

export const AboutInner = styled.div`
    display: flex;
    justify-content: space-evenly;

    .about{
        img{
            
        }
        .about_item{
            margin-top: 12px;
            
            p{
                margin-bottom: 4rem;
                font-size: 1rem;
                text-align: center;
                font-weight: 700;
                opacity: 0.8;
            }
        }
    }
`