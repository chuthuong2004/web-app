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
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
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