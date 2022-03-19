import Navbar from './Navbar'
import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 84px;
    z-index: 1000;
    .brand{
        .container{
            cursor: pointer;
            gap: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                max-width: 170px;
            }
        }
    }

    ul{
        display: flex;
        list-style-type: none;
        gap: 4rem;
        font-weight: 700;
        li{
            a{
                text-decoration: none;
                color: #000;
                font-size: 1.2rem;
                opacity: 0.8;
                transition: 0ms.1s ease-in-out;

                &:hover{
                    box-shadow: 0 0.1rem #023e83;
                    color: #023e83;
                }
            }

        }
    }

    .IconNavbar{
        .Fasearch, .FaCartPlus{
            font-size: 1rem;
            padding: 0 0.8rem;
            text-align: center;
            margin-top: auto;
            margin-bottom: auto;
            line-height: 71px;
            cursor: pointer;
            opacity: 0.4;

            &:hover{
                transition: 0ms.1s ease-in-out;
                color: #023e83;
                opacity: 1;
            }
        }

        button{
        margin-left: 1.2rem;
        cursor: pointer;
        background-color: #DCDCDC;
        color: #000;
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        border: none;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.3s ease-in-out;
        align-items: center;
        justify-content: center;


        &:hover{
            background-color: #000;
            color: #fff;
        }
    }
    }
`

export default Navbar.elements