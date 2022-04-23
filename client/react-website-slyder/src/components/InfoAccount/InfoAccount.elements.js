import styled from "styled-components";


export const Content = styled.div`
    padding-top: 10rem;
    padding-left: 16rem;
    padding-right: 16rem;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        padding: 0;

        .form-respon{
            display: block;
        }
    }
`

export const ContentInfo = styled.div`
    
    font-weight: bold;

    form{
        .form-row{
            display: flex;
            border: #000;
        }

        .form-group{
            margin-top: 32px;
        }
    }

    from{
        width: 100%;
        .row-2-pass{
            h2{
                margin-top: 34px;
                font-size: 1.2rem;
                font-weight: bold;
                opacity: 0.6;
                border-bottom: 1px solid #000;
                display: inline-block;
            }
            .form-group{
                margin-top: 32px;
            }
        }

        .inputPassWord{
            width: 100%;
        }
    }

    #inputEmail4{
        width: 100%;
    }

    button{
        margin-top: 32px;
        margin-bottom: 32px;
        background-color: #000;
        border: none;
        border-radius: 10px;
        padding: 0.4rem 4rem;
        transition: 0.3s ease-in-out;

        &:hover{
            background-color: #ccc;
            color: #000;
        }
    }
`

export const ContentLink = styled.div`
    p{
        line-height: 1.6;
        opacity: 0.8;
        text-align: justify;
        
        .InfoLink{
            opacity: 1;
            font-weight: 600;
        }
    }
`

export const ContentReply = styled.div`
    padding: 32px 0;

    .form-reply{
        background-color: #DCDCDC;
        min-height: 32vh;
        display: block;
        padding: 1rem;

        h2{
            font-size: 1.7rem;
            font-weight: bold;
        }

        p{
            margin-top: 12px;
            opacity: 0.8;
        }

        span{
            font-weight: bold;
            display: inline-block;
        }

        .input{
            input{
                border: none;
                margin-top: 6px;
                height: 8rem;
                width: 100%;
            }
        }

        button{
            background-color: #000;
            border: none;
            border-radius: 10px;
            padding: 0.4rem 4rem;
            transition: 0.3s ease-in-out;
            margin-top: 24px;
            
            &:hover{
                background-color: #ccc;
                color: #000;
            }
        }

        
    }
`