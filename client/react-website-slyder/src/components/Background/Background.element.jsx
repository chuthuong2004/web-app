import Background from './Background'
import styled from 'styled-components'

export const Section = styled.section`
    .background{
        img{
            max-width: 100%;
            margin-top: 87px;
        }    
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        img{
            height: 10rem;
            
        }
    }
`
export default Background.element