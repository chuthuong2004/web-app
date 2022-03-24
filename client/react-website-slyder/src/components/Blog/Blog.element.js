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
    
    .ImagesIcon{
        position: relative;
        .ImagesItem{
            display: flex;
            text-align: center;
            align-items: center;
            position: relative;
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

            &:hover{
                .BsLeft{
                    display: block;
                }
                .BsRight{
                    display: block;
                }
            } 
        }
    }

    .blogsweets{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem 8rem;
        

        #blogl{
            display: flex;
            padding: 0 10px;

            #BloglItems{
                font-size: 0.8rem;
                text-align: center;
                margin: auto 0;
            }

            h2{
                margin-bottom: 10px;
                opacity: 0.8;
                cursor: pointer;
            }

            

            img{
                height: 14rem;
                width: 14rem;    
            }
        }
    }
`



export const BlogIcon = styled.div`
    justify-content: space-around;
    display: flex;
    font-size: 1.8rem;
    opacity: 0.4;
    display: none;
    .BsLeft{
        position: absolute;
        top: 50%;left: 0;
        margin-left: 16rem;
    }
        
    .BsRight{
        position: absolute;
        top: 50%;right: 0;
        margin-right: 16rem;
    }
`

