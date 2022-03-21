import styled from 'styled-components'

export const Content = styled.div`

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        
        &:hover{
            cursor: pointer
        }
      }
      .active {
        padding-bottom: 0.4rem;

        &:hover{
            cursor: pointer;
            border-top: 0.2rem solid #000;
        }
        
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 2rem;
    padding: 0 3rem;
    cursor: pointer;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #FFFAF0;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;

      .price_sale{
        margin-right: -13rem;
        font-size: 1rem;
        text-decoration: line-through;
        opacity: 0.6;
      }

      .percent{
          position: absolute;
          top: 0;right: 0;
          color: #000;
          font-size: 1rem;
          width: 60px;
          height: 36px;
          display: flex;
          border-bottom-left-radius: 1rem;
          align-items: center;
          justify-content: center;
          background-color: #FF4500;
        }

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      img {
        width: 100%;
        transition: 0.3s ease-in-out;

        &:hover{
          transform: scale(1.2);
        }
      }

      .info {
        display: flex;
        align-items: center;

        .services {
          display: flex;
          gap: 0.3rem;

          img {
            border-radius: 1rem;
            background-color: #000;
            width: 2rem;
            padding: 0.4rem 0.5rem;

            &:hover{
                transform: scale(1.2);
            }
          }
        }
        
        display: flex;
        justify-content: space-between;
      }
    }
  }
  button{
    margin-top: 4rem;
    padding: 0.6rem 4rem;
    transition:all 1s;
    border-radius: 2rem;
    cursor: pointer;
    position:relative;
    font-size: 1rem;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: #000;

    .IconButton{
      margin-left: 0.2rem;
    }

    &:after,&:before{
      content:" ";
      width:0.1px;
      height:0.1px;
      position:absolute;
      opacity: 0.1;
      border :0px solid #fff;
      transition:all 1s;
    }
    &:after{
      top:-1px;
      left:-1px;
      border-top:5px solid black;
      border-left:5px solid black;
    }
    &:before{
      bottom:-1px;
      right:-1px;
      border-bottom:5px solid black;
      border-right:5px solid black;
    }
    &:hover{
      border-top-right-radius:2rem;
      border-bottom-left-radius:2rem;
      &:before,&:after{
        border-radius: 2rem;
        opacity: 1;
        width:100%;
        height:100%;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;