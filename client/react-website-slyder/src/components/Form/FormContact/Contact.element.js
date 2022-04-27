import styled from "styled-components"

export const ContainerContact = styled.div`
    padding-top: 84px;
    padding-bottom: 84px;
`

export const ContactContent = styled.div`
    .content_title_img{
        min-height: 270px;
        background-position: 0% 0%;
        width: 100%;
        opacity: 0.8;
        position: relative;
        background-image: url(http://slyder.vn/wp-content/uploads/2020/04/slider_1920x800-Copy-Copy-1.jpg);
        .content_tile_pos{
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            padding: 20px;
            text-transform: uppercase;
            p{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: #000;
                font-size: 28px;
                font-weight: bold;
            }
        }
    }
`

export const ContactForm = styled.div`
    margin-top: 8rem;

    .form-contact{
        justify-content: space-around;
        display: flex;
        padding: 0 8rem;

        .form-left{
            width: 50%;

            h2{
            text-align: center;
            font-size: 1.6rem;
            font-weight: bold;
            text-transform: uppercase;
            }

            .form-left-up{
                margin-top: 62px;
                
                .form-control{
                    width: 100%;
                    height: 2.5rem;
                }
            }
            .form-left-down{
                margin-top: 22px;
            }

            .input-mess{
                width: 100%;
                border-radius: 4px;
                height: 8rem;
                padding: 10px;
                border: 1px solid #ccc;
            }

            .button-send{
                margin-left: auto;
                margin-right: auto;
                display: block;
                height: 42px;
                width: 40%;
                background-color: #000;
                color: #fff;
                border: none;
                border-radius: 10px;
            }
        }

        .form-right{
            width: 50%;

            ul{
                margin-top: 34px;
                line-height: 2.2;
                letter-spacing: 1px;

                li{
                    font-size: 16px;
                    
                }
            }
        }
    }
`
