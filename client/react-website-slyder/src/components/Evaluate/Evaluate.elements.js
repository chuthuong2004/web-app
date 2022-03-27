import styled from 'styled-components'

export const Section = styled.div`
    margin-top: 6rem;
    .heading{
        text-align: center;
        opacity: 0.8;
    }

    .review-slider{
        display: flex;
        padding-bottom: 3rem;
        
        .box{
            text-align: center;
            padding:2rem;
            margin: 2rem 0;
            opacity: .4;
            transform: scale(.9);

            img{
                height:7rem;
                width:7rem;
                border-radius: 50%;
                object-fit: cover;
            }

            .content{
                p{
                    color:var(--light-color);
                    font-size: 1.4rem;
                    padding:1rem 0;
                }
                h3{
                    color:var(--black);
                    font-size: 2.2rem;
                    padding-bottom: .5rem;
                }

                .stars{
                    color: #f9d806;
                    font-size: 1.7rem;
                }
            }
        }

        .swiper-slide-active{
            opacity: 1;
            transform: scale(1);
            box-shadow: 0.5rem 1rem rgba(0,0,0,.1);
            border:var(--border);
            border-radius: .1rem solid rgba(0,0,0,.1);
        }
    }
`