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
    box-shadow: 0 5px 10px #ccc;
    margin-left: -2rem;
    padding: 0 1rem;
    .brand{
        .container{
            cursor: pointer;
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
                transition: 0.1s ease-in-out;

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
                cursor: pointer;
                transition: 0.1s ease-in-out;
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
            width: 100%;
            height: 84px;
            display: flex;
            .container{
                display: flex;
                margin-left: auto;
                margin-right: auto;
                img{
                    padding-left: 1rem;
                    max-width: 150px;
                }
            }
            
            .toggle {
                display: block;
                font-size: 1.6rem;
                margin-right: 4.5rem;
                top: 0;left: 0;
                margin-left: 1rem;
                position: absolute;
            }
        }

        .IconNavbar{
            .Fasearch{
                display: none;
            }
            .FaCartPlus{
                font-size: 1.6rem;
            }
        }

        ul,button{
            display: none;
        }
    }
`

export const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  top: ${({ state }) => (state ? "80px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  margin-left: -2rem;
  margin-right: -2rem;
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

    button{
        height: 30px;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        color: #ccc;
        list-style: none;
        background-color: #023e8a;
        border: none;
        transition: 0.3s ease-in-out;

        &:hover{
            background-color: #ccc;
            color: #000;
        }
    }
`;