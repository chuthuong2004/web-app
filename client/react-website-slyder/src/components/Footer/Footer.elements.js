
import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20rem;
    margin-left: -2rem;
    margin-right: -2rem;

    @media screen and (min-width: 280px) and (max-width: 1080px){
        display: block;
        padding: 16px 0;
        text-align: center;
        line-height: 18px;
        min-height: 40rem;
    }
`

export const FooterItems = styled.div`
    
`

export const FooterLocation = styled.div`
    margin-bottom: 16px;
`

export const FooterList = styled.div``

export const FooterSignout = styled.div``

export const FooterTime = styled.div``

export const FotterTitle = styled.h2`
    font-size: 1.4rem;
`

export const FooterLink = styled.p`
    cursor: pointer;
    margin-top: 0.4rem;
    font-size: 1rem;
    opacity: 0.6;
`

export const FooterInput = styled.div`
    margin-top: 16px;
    
    input{
        width: 18rem;
        padding: 0.4rem 0.8rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    button{
        width: 6rem;
        padding: 0.4rem;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`
export const FotterIcon = styled.ul`
    list-style-type: none;
    margin-top: 16px;  
    font-size: 28px;
    cursor: pointer;

    li{
        list-style: none;
        display: inline;
        margin-right: 1rem;
    }
`

export const FotterEnd = styled.div`
    background-color: #ccc;
    height: 40px;
    margin-left: -2rem;
    margin-right: -2rem;
`

export const WebsiteRights = styled.p`
    text-align: center;
    line-height: 40px;
    font-size: 1rem;
    opacity: 0.8;
`