import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 84px;
    width: 100%;
    z-index: 10;
    position: fixed;
    background-color: #fff;
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
        .toggle{
            display: none;
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
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            border: none;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.3s ease-in-out;
            align-items: center;
            justify-content: center;

            a{
                text-decoration: none;
                color: #000;
            }

            &:hover button a{
                background-color: #000;
                color: #fff;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 0.8rem 0;
            .container{
                img{
                    max-width: 150px;
                }
            }
            
            .toggle {
                display: block;
                margin-right: 4.5rem;
            }
        }
        ul,button, .IconNavbar{
            display: none;
        }
    }
`

export const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  top: ${({ state }) => (state ? "90px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;

    ul{
        list-style-type: none;
        width: 100%;

        li{
            width: 100%;
            margin: 1rem 0;
            margin-left: 2rem;

            a{
                text-decoration: none;
                color: #000;
                font-size: 1.2rem;
                transition: 0.1s ease-in-out;

                &:hover{
                    color: #023e8a;
                }
            }

            &:first-of-type {
                a{
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        }
    }

    .signup{
        text-decoration: none;  
        font-weight: bold;

        button{
            height: 30px;
            width: 30%;
            cursor: pointer;
            margin-left: auto;
            margin-right: auto;
            display: block;
            border-radius: 10px;
        }
    }
`;