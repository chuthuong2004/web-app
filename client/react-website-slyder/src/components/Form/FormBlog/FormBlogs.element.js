import styled from "styled-components";

export const ContainerBlogs = styled.div`
    padding-top: 84px;

    .blog_news{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        
        p{
            font-size: 24px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
    }

    .blog_news-items{
        margin-bottom: 8rem;
        margin-top: 62px;
        padding: 0 16rem;

        .news {
            display: grid;
            grid-template-columns: repeat(3, 2fr);
            gap: 2rem;
            padding: 0 6rem;
            cursor: pointer;
            
            
            .new {
                box-shadow: 0 10px 10px #ccc;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                height: 40vh;
                position: relative;

                .date_news{
                    position: absolute;
                    background-color: #000;
                    color: #fff;
                    top: 10px;
                    left: 10px;
                    padding: 12px;
                    font-size: 12px;
                    border-radius: 100%;
                    font-weight: bold;
                }

                img {
                    object-position: 50% 50%;
                    object-fit: cover;
                    height: 100%;
                    top: 0;right: 0;left:0;
                    max-height: 240px;
                    width: 100%;
                }

                .info{
                    padding: 0 1rem ;
                    margin-top: 12px;
                    h5{
                        font-size: 18px;
                        font-weight: bold;
                    }

                    h4{
                        line-height: 1.6;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`