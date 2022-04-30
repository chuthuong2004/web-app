import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 84px;
    width: 100%;
    z-index: 10;
    position: fixed;
    background-color: #fff;
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

    .IconNavbar{
        display: flex;
        
        .navbar {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #555;
            padding-top: 0;
            padding-bottom: 0;
            cursor: pointer;
        
            .wrapper {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
        
            .items {
                display: flex;
                align-items: center;
        
                .item {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    position: relative;
        
                    .icon {
                        font-size: 20px;
                    }
        
                    .avatar {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
        
                    .counter {
                        width: 15px;
                        height: 15px;
                        background-color: red;
                        border-radius: 50%;
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 10px;
                        font-weight: bold;
                        position: absolute;
                        top: -5px;
                        right: -5px;
                    }
                }
            }
            }
        }
  
    }

    .button-log{
        margin-left: 1.2rem;
        cursor: pointer;
        /* display: none; */
    
        .signup{
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            background-color: #DCDCDC;
            border: none;
            margin-right: 8px;
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.4s ease-in-out;
            align-items: center;
            justify-content: center;
            
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }

        .rigister{
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            background-color: #DCDCDC;
            border: none;
            margin-right: 8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.4s ease-in-out;
            align-items: center;
            justify-content: center;
            &:hover{
                background-color: #000;
                color: #fff;
            }
        }
    }

    .button-logout{
        .Icon-user{
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
        
        &:hover .Icon-user > .navIcon{
            display: block;
        }

        .navIcon::before{
            content: "";
            border-width: 20px 20px;
            border-style: solid;
            border-color: transparent transparent #fff;
            position: absolute;
            right: 86%;
            top: -40px;
        }
        .navIcon::before{
            content: "";
            border-width: 20px 20px;
            border-style: solid;
            position: absolute;
            right: 86%;
            top: -40px;
        }
    }
    .signout{
            padding: 0.5rem 2rem;
            border-radius: 1rem;
            background-color: #DCDCDC;
            border: none;
            margin-right: 8px;
            text-transform: uppercase;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            transition: 0.4s ease-in-out;
            align-items: center;
            justify-content: center;
            color: #000;
            text-decoration: none;
            margin-left: 0.8rem ;

            &:hover{
                background-color: #000;
                color: #fff;
            }
        }
`;